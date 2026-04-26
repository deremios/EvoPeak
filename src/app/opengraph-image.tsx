import { ImageResponse } from "next/og";
import { region } from "@/config";

export const runtime = "edge";
export const alt = "EvoPeak research-grade peptides. Triple tested. Australia shipped.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8faf7",
          color: "#10231f",
          padding: 72,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 800 }}>{region.brandName}</div>
          <div
            style={{
              border: "2px solid #2f7d57",
              color: "#2f7d57",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            Australia Shipped
          </div>
        </div>
        <div>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 850, letterSpacing: "-0.04em" }}>
            Research-Grade Peptides.
            <br />
            Triple Tested.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.35, color: "#42524b", maxWidth: 860 }}>
            HPLC/MS verified, endotoxin screened, COA documented. For laboratory research use only.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#42524b" }}>
          <span>HPLC/MS</span>
          <span>Identity verified</span>
          <span>Endotoxin screened</span>
          <span>Local AU stock</span>
        </div>
      </div>
    ),
    size
  );
}
