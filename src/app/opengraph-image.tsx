import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Shalom Calvin – Software Engineer specializing in Backend Development, Full Stack Development and Microsoft Power Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Geist (the site font, SIL OFL) as TTF, because ImageResponse cannot read the woff2 files next/font serves.
const fontDir = join(process.cwd(), "assets/fonts/geist");
const geistBold = await readFile(join(fontDir, "Geist-Bold.ttf"));
const geistRegular = await readFile(join(fontDir, "Geist-Regular.ttf"));

// Flat on purpose: solid #0a0a0a, white name, #34d399 title, grey line. Same values as the dark theme tokens.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#0a0a0a",
          fontFamily: "Geist",
        }}
      >
        <div style={{ fontSize: 128, fontWeight: 700, color: "#ffffff", letterSpacing: -3, lineHeight: 1.05 }}>
          Shalom Calvin
        </div>
        <div style={{ marginTop: 20, fontSize: 60, fontWeight: 700, color: "#34d399", lineHeight: 1.1 }}>
          Software Engineer
        </div>
        <div style={{ marginTop: 40, fontSize: 34, fontWeight: 400, color: "#a3a3a3", lineHeight: 1.3 }}>
          Backend, Full Stack &amp; Power Platform
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistBold, style: "normal", weight: 700 },
        { name: "Geist", data: geistRegular, style: "normal", weight: 400 },
      ],
    },
  );
}
