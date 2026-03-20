import { ImageResponse } from "next/og";
import { getAlbumBySlug } from "@/lib/tracks";

export const runtime = "edge";
export const alt = "Album — Lenny's Greatest Hits";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);

  if (!album) {
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
          Album Not Found
        </div>
      ),
      { ...size }
    );
  }

  const accentColor = album.accentColor || "#f59e0b";

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
          background: `linear-gradient(135deg, #0a0a0a 0%, ${accentColor}33 60%, #0a0a0a 100%)`,
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
        {/* Coming Soon badge */}
        {album.comingSoon && (
          <div
            style={{
              display: "flex",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                color: "#fafafa",
                backgroundColor: `${accentColor}aa`,
                padding: "6px 16px",
                borderRadius: "20px",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 600,
              }}
            >
              Coming Soon
            </div>
          </div>
        )}
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
    { ...size }
  );
}
