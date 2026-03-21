import { ImageResponse } from "next/og";
import { getTrackBySlug, getAlbumForTrack } from "@/lib/tracks";

export const runtime = "edge";
export const alt = "Track | Lenny's Greatest Hits";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = getTrackBySlug(slug);
  const album = track ? getAlbumForTrack(slug) : undefined;

  if (!track || !album) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#0a0a0a",
            color: "#fafafa",
            fontSize: "48px",
            fontFamily: "sans-serif",
          }}
        >
          Track Not Found
        </div>
      ),
      { ...size }
    );
  }

  const accentColor = album.accentColor || "#f59e0b";
  const displayQuote = track.keyQuote || "";

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
          background: `linear-gradient(135deg, #0a0a0a 0%, ${accentColor}22 50%, #0a0a0a 100%)`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: "80px",
            height: "6px",
            borderRadius: "3px",
            backgroundColor: accentColor,
            marginBottom: "24px",
          }}
        />
        {/* Album label + Coming Soon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: accentColor,
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            {album.title} &middot; Track {track.trackNumber}
          </div>
          {track.isLocked && (
            <div
              style={{
                fontSize: "14px",
                color: "#fafafa",
                backgroundColor: `${accentColor}aa`,
                padding: "4px 12px",
                borderRadius: "16px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 600,
              }}
            >
              Coming Soon
            </div>
          )}
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
        {/* Key quote */}
        {displayQuote && (
          <div
            style={{
              fontSize: "22px",
              color: "#a1a1aa",
              fontStyle: "italic",
              lineHeight: 1.5,
              maxWidth: "900px",
            }}
          >
            &ldquo;{displayQuote.slice(0, 120)}
            {displayQuote.length > 120 ? "..." : ""}&rdquo;
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
    { ...size }
  );
}
