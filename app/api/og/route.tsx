import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { getTrackBySlug, getAlbumBySlug, getAlbumForTrack } from "@/lib/tracks";

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

  const displayQuote = track.keyQuote || "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left accent stripe */}
        <div
          style={{
            width: "80px",
            height: "100%",
            backgroundColor: album.accentColor,
            flexShrink: 0,
          }}
        />
        {/* Content area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 60px 60px 48px",
            flex: 1,
          }}
        >
          {/* Track title */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            {track.title}
          </div>
          {/* Guest attribution */}
          {track.sources[0]?.guest && (
            <div
              style={{
                fontSize: "22px",
                color: album.accentColor,
                marginBottom: "28px",
              }}
            >
              Based on {track.sources[0].guest}&apos;s episode with Lenny
            </div>
          )}
          {/* Key quote */}
          {displayQuote && (
            <div
              style={{
                fontSize: "22px",
                color: "#a1a1aa",
                fontStyle: "italic",
                lineHeight: 1.5,
                maxWidth: "900px",
                marginBottom: "28px",
              }}
            >
              &ldquo;{displayQuote.slice(0, 140)}{displayQuote.length > 140 ? "..." : ""}&rdquo;
            </div>
          )}
          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "auto",
              fontSize: "18px",
              color: "#71717a",
            }}
          >
            lennys-greatest-hits.vercel.app &middot; Hit Play
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

function parseDuration(d: string): number {
  const parts = d.split(":").map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return 0;
}

function formatTotalDuration(tracks: { duration: string }[]): string {
  const totalSeconds = tracks.reduce((sum, t) => sum + parseDuration(t.duration), 0);
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function renderAlbumOG(slug: string) {
  const album = getAlbumBySlug(slug);

  if (!album) {
    return renderDefaultOG();
  }

  const first5 = album.tracks.slice(0, 5);
  const totalDuration = formatTotalDuration(album.tracks);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left accent stripe */}
        <div
          style={{
            width: "80px",
            height: "100%",
            backgroundColor: album.accentColor,
            flexShrink: 0,
          }}
        />
        {/* Content area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 60px 60px 48px",
            flex: 1,
          }}
        >
          {/* Album title */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.1,
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
              marginBottom: "24px",
            }}
          >
            {album.subtitle}
          </div>
          {/* Track count + duration */}
          <div
            style={{
              fontSize: "20px",
              color: album.accentColor,
              marginBottom: "28px",
            }}
          >
            {album.tracks.length} tracks &middot; {totalDuration}
          </div>
          {/* First 5 track names */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {first5.map((track, i) => (
              <div
                key={track.slug}
                style={{
                  fontSize: "20px",
                  color: "#71717a",
                }}
              >
                {i + 1}. {track.title}
              </div>
            ))}
            {album.tracks.length > 5 && (
              <div
                style={{
                  fontSize: "18px",
                  color: "#52525b",
                  marginTop: "4px",
                }}
              >
                +{album.tracks.length - 5} more
              </div>
            )}
          </div>
          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "auto",
              fontSize: "18px",
              color: "#71717a",
            }}
          >
            lennys-greatest-hits.vercel.app &middot; Hit Play
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
          10 songs &middot; 4 albums
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
