import { Position } from "../types";

interface PositionsTableProps {
  positions: Position[];
}

const ASSET_COLORS: Record<string, string> = {
  stock:  "#3b82f6",
  crypto: "#f59e0b",
  etf:    "#8b5cf6",
  forex:  "#06b6d4",
};

export function PositionsTable({ positions }: PositionsTableProps) {
  return (
    <div style={{
      background: "#0f1117",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 12,
      overflow: "hidden",
    }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#f9fafb" }}>Open Positions</div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ fontSize: 11, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {["Symbol", "Asset", "Qty", "Avg Price", "Current", "Market Value", "P&L", "P&L %"].map((h) => (
                <th key={h} style={{ padding: "12px 16px", textAlign: "right", fontWeight: 500, whiteSpace: "nowrap", ...(h === "Symbol" ? { textAlign: "left" } : {}) }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {positions.map((p, i) => (
              <tr
                key={p.id}
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  fontSize: 13,
                }}
              >
                <td style={{ padding: "14px 16px", color: "#f9fafb", fontWeight: 600 }}>
                  <div>{p.symbol}</div>
                  <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 400, marginTop: 2 }}>{p.name}</div>
                </td>
                <td style={{ padding: "14px 16px", textAlign: "right" }}>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: ASSET_COLORS[p.asset],
                    background: ASSET_COLORS[p.asset] + "18",
                    borderRadius: 4,
                    padding: "2px 7px",
                  }}>
                    {p.asset}
                  </span>
                </td>
                <td style={{ padding: "14px 16px", textAlign: "right", color: "#d1d5db" }}>{p.quantity}</td>
                <td style={{ padding: "14px 16px", textAlign: "right", color: "#d1d5db" }}>${p.avgPrice.toLocaleString()}</td>
                <td style={{ padding: "14px 16px", textAlign: "right", color: "#f9fafb" }}>${p.currentPrice.toLocaleString()}</td>
                <td style={{ padding: "14px 16px", textAlign: "right", color: "#f9fafb", fontWeight: 500 }}>${p.marketValue.toLocaleString()}</td>
                <td style={{ padding: "14px 16px", textAlign: "right", color: p.pnl >= 0 ? "#22c55e" : "#ef4444", fontWeight: 500 }}>
                  {p.pnl >= 0 ? "+" : ""}${p.pnl.toLocaleString()}
                </td>
                <td style={{ padding: "14px 16px", textAlign: "right", color: p.pnlPct >= 0 ? "#22c55e" : "#ef4444", fontWeight: 500 }}>
                  {p.pnlPct >= 0 ? "+" : ""}{p.pnlPct.toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
