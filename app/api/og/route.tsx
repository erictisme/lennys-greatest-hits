import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { getTrackBySlug, getAlbumBySlug, getAlbumForTrack, getAllAlbums } from "@/lib/tracks";

export const runtime = "edge";

const ALBUM_COLORS: Record<string, string> = {
  founders: "#f59e0b",
  product: "#3b82f6",
  builders: "#10b981",
  "the-human-side": "#8b5cf6",
};

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");

  if (type === "track" && slug) {
    return renderTrackOG(slug);
  }

  if (type === "album" && slug) {
    return renderAlbumOG(slug);
  }

  return renderDefaultOG();
}

function renderTrackOG(slug: string) {
  const track = getTrackBySlug(slug);
  const album = track ? getAlbumForTrack(slug) : undefined;

  if (!track || !album) {
    return renderDefaultOG();
  }

  // Extract first meaningful lyric line for display
  const lines = track.lyrics.split("\n").filter(
    (l) => l.trim() && !l.trim().startsWith("[")
  );
  const displayLyric = track.keyQuote || lines[0] || "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: `linear-gradient(135deg, #0a0a0a 0%, ${album.accentColor}22 50%, #0a0a0a 100%)`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: "80px",
            height: "6px",
            borderRadius: "3px",
            backgroundColor: album.accentColor,
            marginBottom: "24px",
          }}
        />
        {/* Album label */}
        <div
          style={{
            fontSize: "20px",
            color: album.accentColor,
            textTransform: "uppercase" as const,
            letterSpacing: "3px",
            marginBottom: "16px",
          }}
        >
          {album.title} &middot; Track {track.trackNumber}
        </div>
        {/* Track title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          {track.title}
        </div>
        {/* Key lyric */}
        {displayLyric && (
          <div
            style={{
              fontSize: "22px",
              color: "#a1a1aa",
              fontStyle: "italic",
              lineHeight: 1.5,
              maxWidth: "900px",
            }}
          >
            &ldquo;{displayLyric.slice(0, 120)}{displayLyric.length > 120 ? "..." : ""}&rdquo;
          </div>
        )}
        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            gap: "12px",
          }}
        >
          <div style={{ fontSize: "18px", color: "#71717a" }}>
            Lenny&apos;s Greatest Hits
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

function renderAlbumOG(slug: string) {
  const album = getAlbumBySlug(slug);

  if (!album) {
    return renderDefaultOG();
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: `linear-gradient(135deg, #0a0a0a 0%, ${album.accentColor}33 60%, #0a0a0a 100%)`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: "80px",
            height: "6px",
            borderRadius: "3px",
            backgroundColor: album.accentColor,
            marginBottom: "24px",
          }}
        />
        {/* Album title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.15,
            marginBottom: "12px",
          }}
        >
          {album.title}
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: "26px",
            color: "#a1a1aa",
            marginBottom: "32px",
          }}
        >
          {album.subtitle}
        </div>
        {/* Track list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {album.tracks.map((track) => (
            <div
              key={track.slug}
              style={{
                fontSize: "20px",
                color: "#71717a",
              }}
            >
              {track.trackNumber}. {track.title}
            </div>
          ))}
        </div>
        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            gap: "12px",
          }}
        >
          <div style={{ fontSize: "18px", color: "#71717a" }}>
            Lenny&apos;s Greatest Hits &middot; {album.tracks.length} tracks
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

function renderDefaultOG() {
  const colors = Object.values(ALBUM_COLORS);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(135deg, #0a0a0a 0%, ${colors[0]}15 25%, ${colors[1]}15 50%, ${colors[2]}15 75%, ${colors[3]}15 100%)`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Color grid squares */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
          {colors.map((color, i) => (
            <div
              key={i}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "8px",
                backgroundColor: color,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#fafafa",
            textAlign: "center" as const,
            lineHeight: 1.15,
            marginBottom: "16px",
          }}
        >
          Lenny&apos;s Greatest Hits
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            textAlign: "center" as const,
          }}
        >
          Tech culture anthems from 638 episodes
        </div>
        {/* Track count */}
        <div
          style={{
            fontSize: "18px",
            color: "#71717a",
            marginTop: "24px",
          }}
        >
          12 songs &middot; 4 albums
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
