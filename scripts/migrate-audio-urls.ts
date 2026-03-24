import "dotenv/config";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

if (!supabaseUrl) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL in .env.local");
  process.exit(1);
}

const albumsPath = join(process.cwd(), "lib", "albums.ts");
let content = readFileSync(albumsPath, "utf-8");

const pattern = /audioUrl:\s*"\/audio\/([^"]+\.mp3)"/g;
let count = 0;

content = content.replace(pattern, (_match, filename) => {
  count++;
  return `audioUrl: "${supabaseUrl}/storage/v1/object/public/audio/${filename}"`;
});

writeFileSync(albumsPath, content, "utf-8");
console.log(`Replaced ${count} audio URLs in lib/albums.ts`);
