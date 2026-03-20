import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lenny's Greatest Hits";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #1a0f00 0%, #3d2200 25%, #5c3a10 50%, #3d2200 75%, #1a0f00 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Album color dots */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
          {["#f59e0b", "#3b82f6", "#10b981", "#8b5cf6"].map((color, i) => (
            <div
              key={i}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "24px",
                backgroundColor: color,
                opacity: 0.85,
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
            textAlign: "center",
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
            color: "#d4a574",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Lenny Rachitsky&apos;s best insights turned into actual songs
        </div>
        {/* Track count */}
        <div
          style={{
            fontSize: "18px",
            color: "#a8845c",
            marginTop: "24px",
          }}
        >
          10 songs &middot; 4 albums &middot; 638 episodes distilled
        </div>
      </div>
    ),
    { ...size }
  );
}
