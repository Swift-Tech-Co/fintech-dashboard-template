interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  changePositive?: boolean;
  sub?: string;
}

export function MetricCard({ label, value, change, changePositive, sub }: MetricCardProps) {
  return (
    <div style={{
      background: "#0f1117",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 12,
      padding: "20px 24px",
    }}>
      <div style={{ fontSize: 11, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: "#f9fafb", marginBottom: 6 }}>
        {value}
      </div>
      {change && (
        <div style={{ fontSize: 13, color: changePositive ? "#22c55e" : "#ef4444", fontWeight: 500 }}>
          {changePositive ? "▲" : "▼"} {change}
        </div>
      )}
      {sub && <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>{sub}</div>}
    </div>
  );
}
