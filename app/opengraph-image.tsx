import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lenny's Greatest Hits";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const albumColors = [
    "#b45309", "#a16207", "#0369a1",
    "#7c2d12", "#0e7490", "#7e22ce",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          background: "#0a0a0a",
          fontFamily: "sans-serif",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Subtle warm gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(217, 119, 6, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(180, 83, 9, 0.08) 0%, transparent 50%)",
            display: "flex",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 56px",
            flex: 1,
            zIndex: 1,
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#fafafa",
              lineHeight: 1.1,
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            {"Lenny's"}
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#fafafa",
              lineHeight: 1.1,
              marginBottom: "28px",
              letterSpacing: "-1px",
            }}
          >
            Greatest Hits
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "22px",
              color: "#d4a574",
              lineHeight: 1.5,
              maxWidth: "480px",
              marginBottom: "32px",
            }}
          >
            {"Lenny's best podcast insights — turned into real, playable songs"}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "16px",
              color: "#a8845c",
              letterSpacing: "0.5px",
            }}
          >
            <span>102 songs</span>
            <span>·</span>
            <span>11 albums</span>
            <span>·</span>
            <span>638 episodes distilled</span>
          </div>
        </div>

        {/* Right side: 3x2 album grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "60px 56px 60px 0",
            gap: "12px",
            zIndex: 1,
          }}
        >
          {[0, 1].map((row) => (
            <div
              key={row}
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              {[0, 1, 2].map((col) => {
                const color = albumColors[row * 3 + col];
                return (
                  <div
                    key={col}
                    style={{
                      width: "130px",
                      height: "130px",
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${color} 0%, ${color}aa 100%)`,
                      boxShadow: `0 4px 24px ${color}44`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
