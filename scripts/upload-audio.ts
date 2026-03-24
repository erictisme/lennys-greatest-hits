import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import { join } from "path";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  // Create bucket (ignore if exists)
  const { error: bucketError } = await supabase.storage.createBucket("audio", { public: true });
  if (bucketError && !bucketError.message.includes("already exists")) {
    console.error("Failed to create bucket:", bucketError.message);
    process.exit(1);
  }

  const audioDir = join(process.cwd(), "public", "audio");
  const files = readdirSync(audioDir).filter((f) => f.endsWith(".mp3"));

  console.log(`Found ${files.length} MP3 files to upload`);

  for (let i = 0; i < files.length; i++) {
    const filename = files[i];
    const filePath = join(audioDir, filename);
    const fileData = await readFile(filePath);

    const { error } = await supabase.storage.from("audio").upload(filename, fileData, {
      contentType: "audio/mpeg",
      upsert: true,
    });

    if (error) {
      console.error(`Failed to upload ${filename}:`, error.message);
    } else {
      console.log(`Uploaded ${i + 1}/${files.length}: ${filename}`);
    }
  }

  console.log(`\nPublic URL pattern: ${supabaseUrl}/storage/v1/object/public/audio/{filename}`);
}

main();
