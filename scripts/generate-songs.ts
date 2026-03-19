import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import * as fs from "fs";
import * as path from "path";

// Suno API base URL (unofficial API wrapper)
const SUNO_BASE_URL = "https://studio-api.suno.ai";
const CLERK_BASE_URL = "https://clerk.suno.com";

const SUNO_COOKIE = process.env.SUNO_COOKIE;
if (!SUNO_COOKIE) {
  console.error("Error: SUNO_COOKIE not set in .env.local");
  process.exit(1);
}

// ─── Auth ────────────────────────────────────────────────────────────────────

let sessionToken: string | null = null;

async function getAuthToken(): Promise<string> {
  if (sessionToken) return sessionToken;

  // Get session IDs from Clerk
  const sessionsRes = await fetch(
    `${CLERK_BASE_URL}/v1/client?_clerk_js_version=4.73.4`,
    {
      headers: {
        Cookie: SUNO_COOKIE!,
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    }
  );

  if (!sessionsRes.ok) {
    throw new Error(
      `Failed to get Clerk session: ${sessionsRes.status} ${sessionsRes.statusText}`
    );
  }

  const sessionsData = await sessionsRes.json();
  const sessions = sessionsData?.response?.last_active_session_id;

  if (!sessions) {
    throw new Error(
      "No active session found. Cookie may be expired.\n" +
        "To refresh: log into suno.com, open DevTools > Application > Cookies, " +
        "copy the full cookie string, and update SUNO_COOKIE in .env.local"
    );
  }

  // Get JWT token from the active session
  const tokenRes = await fetch(
    `${CLERK_BASE_URL}/v1/client/sessions/${sessions}/tokens?_clerk_js_version=4.73.4`,
    {
      method: "POST",
      headers: {
        Cookie: SUNO_COOKIE!,
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    }
  );

  if (!tokenRes.ok) {
    throw new Error(`Failed to get auth token: ${tokenRes.status}`);
  }

  const tokenData = await tokenRes.json();
  sessionToken = tokenData?.jwt;

  if (!sessionToken) {
    throw new Error("Failed to extract JWT from token response");
  }

  return sessionToken;
}

// ─── Suno API Calls ──────────────────────────────────────────────────────────

interface SunoGenerateRequest {
  prompt: string; // lyrics with structure tags
  tags: string; // style prompt
  title: string;
  mv: string; // model version, e.g. "chirp-v3-5"
  make_instrumental: boolean;
}

interface SunoClip {
  id: string;
  status: string;
  audio_url: string;
  title: string;
}

async function generateSong(
  title: string,
  lyrics: string,
  style: string
): Promise<SunoClip[]> {
  const token = await getAuthToken();

  const payload = {
    prompt: lyrics,
    tags: style,
    title: title,
    mv: "chirp-v4",
    make_instrumental: false,
  };

  const res = await fetch(`${SUNO_BASE_URL}/api/generate/v2/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Generate failed: ${res.status} - ${text}`);
  }

  const data = await res.json();
  const clips: SunoClip[] = data.clips || [];
  console.log(
    `  Generated ${clips.length} clip(s): ${clips.map((c: SunoClip) => c.id).join(", ")}`
  );
  return clips;
}

async function pollForCompletion(
  clipIds: string[],
  maxWait = 300000
): Promise<SunoClip[]> {
  const token = await getAuthToken();
  const start = Date.now();

  while (Date.now() - start < maxWait) {
    const idsParam = clipIds.join(",");
    const res = await fetch(
      `${SUNO_BASE_URL}/api/feed/?ids=${idsParam}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        },
      }
    );

    if (!res.ok) {
      // Token might have expired, refresh it
      sessionToken = null;
      await new Promise((r) => setTimeout(r, 5000));
      continue;
    }

    const clips: SunoClip[] = await res.json();
    const allDone = clips.every(
      (c) => c.status === "complete" || c.status === "error"
    );

    if (allDone) {
      return clips;
    }

    const statuses = clips.map((c) => `${c.id}: ${c.status}`).join(", ");
    console.log(`  Polling... ${statuses}`);
    await new Promise((r) => setTimeout(r, 10000));
  }

  throw new Error("Timed out waiting for song generation");
}

async function downloadMp3(url: string, outputPath: string): Promise<void> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Download failed: ${res.status}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
  console.log(`  Downloaded: ${outputPath}`);
}

// ─── Main Logic ──────────────────────────────────────────────────────────────

interface SongConfig {
  title: string;
  style: string;
  lyrics: string;
  versions: number;
}

async function generateFromConfig(configPath: string): Promise<void> {
  const raw = fs.readFileSync(configPath, "utf-8");
  const config: SongConfig = JSON.parse(raw);
  const slug = path.basename(configPath, ".json");
  const audioDir = path.resolve(__dirname, "../public/audio");
  const logDir = path.resolve(__dirname, "../logs");

  fs.mkdirSync(audioDir, { recursive: true });
  fs.mkdirSync(logDir, { recursive: true });

  const logFile = path.join(logDir, "suno-generation.log");
  const logEntry = (msg: string) => {
    const line = `[${new Date().toISOString()}] ${msg}\n`;
    fs.appendFileSync(logFile, line);
    console.log(msg);
  };

  logEntry(`Starting generation: ${config.title} (${slug})`);

  try {
    const clips = await generateSong(config.title, config.lyrics, config.style);
    const clipIds = clips.map((c) => c.id);
    logEntry(`  Clip IDs: ${clipIds.join(", ")}`);

    const completed = await pollForCompletion(clipIds);

    for (let i = 0; i < completed.length; i++) {
      const clip = completed[i];
      if (clip.status === "complete" && clip.audio_url) {
        const filename = `${slug}-v${i + 1}.mp3`;
        await downloadMp3(clip.audio_url, path.join(audioDir, filename));
        logEntry(`  Saved: ${filename}`);
      } else {
        logEntry(`  Clip ${clip.id} failed: ${clip.status}`);
      }
    }

    logEntry(`Completed: ${config.title}`);
  } catch (err: any) {
    logEntry(`ERROR generating ${slug}: ${err.message}`);
    throw err;
  }
}

async function runTest(): Promise<void> {
  console.log("Running Suno API test...\n");

  const testConfig: SongConfig = {
    title: "Hello World Test",
    style:
      "vocal-forward, spacious, indie folk, warm and hopeful, acoustic guitar, male vocal, studio quality, 100 BPM, key of C",
    lyrics: `[Verse 1]
Hello world, this is a test
Just making sure the pipeline's blessed
A simple song to check the flow
One verse, one chorus, here we go

[Chorus]
Hello world, hello world
Testing one two three
Hello world, hello world
Works perfectly`,
    versions: 1,
  };

  const audioDir = path.resolve(__dirname, "../public/audio");
  const logDir = path.resolve(__dirname, "../logs");
  fs.mkdirSync(audioDir, { recursive: true });
  fs.mkdirSync(logDir, { recursive: true });

  const logFile = path.join(logDir, "suno-generation.log");
  const logEntry = (msg: string) => {
    const line = `[${new Date().toISOString()}] ${msg}\n`;
    fs.appendFileSync(logFile, line);
    console.log(msg);
  };

  logEntry("TEST: Starting Hello World test generation");

  try {
    const clips = await generateSong(
      testConfig.title,
      testConfig.lyrics,
      testConfig.style
    );
    const clipIds = clips.map((c) => c.id);
    logEntry(`TEST: Clip IDs: ${clipIds.join(", ")}`);

    const completed = await pollForCompletion(clipIds);

    for (const clip of completed) {
      if (clip.status === "complete" && clip.audio_url) {
        await downloadMp3(clip.audio_url, path.join(audioDir, "test.mp3"));
        logEntry("TEST: Success! test.mp3 saved to public/audio/");
        break;
      } else {
        logEntry(`TEST: Clip ${clip.id} status: ${clip.status}`);
      }
    }
  } catch (err: any) {
    logEntry(`TEST ERROR: ${err.message}`);
    console.error("\nTest failed:", err.message);
    console.error(
      "\nIf auth failed, make sure SUNO_COOKIE in .env.local is fresh."
    );
    console.error(
      "Get it from: suno.com > DevTools > Application > Cookies > copy full string"
    );
    process.exit(1);
  }
}

async function generateAll(): Promise<void> {
  const promptsDir = path.resolve(__dirname, "../content/suno-prompts");

  if (!fs.existsSync(promptsDir)) {
    console.error("No suno-prompts directory found. Run song creation tasks first.");
    process.exit(1);
  }

  const files = fs
    .readdirSync(promptsDir)
    .filter((f) => f.endsWith(".json"))
    .sort();

  if (files.length === 0) {
    console.error("No prompt files found in content/suno-prompts/");
    process.exit(1);
  }

  console.log(`Found ${files.length} song prompts to generate.\n`);

  for (const file of files) {
    const configPath = path.join(promptsDir, file);
    try {
      await generateFromConfig(configPath);
    } catch {
      console.error(`Failed to generate ${file}, moving on...`);
    }
    // Wait between generations to avoid rate limiting
    console.log("  Waiting 45 seconds before next generation...\n");
    await new Promise((r) => setTimeout(r, 45000));
  }

  console.log("\nAll generations complete. Check logs/suno-generation.log for details.");
}

// ─── CLI Entry Point ─────────────────────────────────────────────────────────

const args = process.argv.slice(2);

if (args.includes("--test")) {
  runTest();
} else if (args.includes("--file") && args[args.indexOf("--file") + 1]) {
  generateFromConfig(args[args.indexOf("--file") + 1]);
} else if (args.includes("--all")) {
  generateAll();
} else {
  console.log(`Usage:
  pnpm tsx scripts/generate-songs.ts --test        Generate a test song
  pnpm tsx scripts/generate-songs.ts --file <path>  Generate from a specific prompt file
  pnpm tsx scripts/generate-songs.ts --all          Generate all songs from content/suno-prompts/
`);
}
