import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Abdelali El Amrani";
  const subtitle =
    searchParams.get("subtitle") ?? "RWA & Tokenization Strategist";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#050C1A",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(ellipse at top right, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top handle */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              border: "1px solid #C9A84C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#C9A84C",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              AR
            </span>
          </div>
          <span
            style={{
              color: "#9BA8BB",
              fontSize: "13px",
              letterSpacing: "0.15em",
            }}
          >
            amranirich
          </span>
        </div>

        {/* Gold line */}
        <div
          style={{
            width: "48px",
            height: "2px",
            background: "#C9A84C",
            marginBottom: "24px",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#F0EDE8",
            lineHeight: 1.1,
            marginBottom: "16px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#C9A84C",
            marginBottom: "32px",
            fontWeight: 400,
          }}
        >
          {subtitle}
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {["RWA", "Tokenization", "Web3", "Dubai", "UHNWI"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "4px 14px",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#8A6F35",
                fontSize: "13px",
                borderRadius: "20px",
                background: "rgba(201,168,76,0.06)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
