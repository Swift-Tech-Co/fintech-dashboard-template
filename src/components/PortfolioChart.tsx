import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { PortfolioSnapshot } from "../types";
import { format, parseISO } from "date-fns";

interface PortfolioChartProps {
  data: PortfolioSnapshot[];
}

function fmt(v: number) {
  return "$" + (v >= 1000 ? (v / 1000).toFixed(0) + "K" : v);
}

export function PortfolioChart({ data }: PortfolioChartProps) {
  const start = data[0]?.value ?? 0;
  const end   = data[data.length - 1]?.value ?? 0;
  const positive = end >= start;

  const color = positive ? "#22c55e" : "#ef4444";

  return (
    <div style={{
      background: "#0f1117",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 12,
      padding: "24px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 12, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
            Portfolio Value
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#f9fafb" }}>
            {fmt(end)}
          </div>
        </div>
        <div style={{ fontSize: 14, color, fontWeight: 600, background: color + "18", borderRadius: 8, padding: "6px 12px" }}>
          {positive ? "+" : ""}{(((end - start) / start) * 100).toFixed(2)}% (90d)
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={color} stopOpacity={0.18} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
          <XAxis
            dataKey="date"
            tickFormatter={(d) => format(parseISO(d), "MMM d")}
            tick={{ fontSize: 11, fill: "#6b7280" }}
            tickLine={false}
            axisLine={false}
            interval={14}
          />
          <YAxis
            tickFormatter={fmt}
            tick={{ fontSize: 11, fill: "#6b7280" }}
            tickLine={false}
            axisLine={false}
            width={56}
          />
          <Tooltip
            contentStyle={{ background: "#1a1d2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 13 }}
            labelFormatter={(d) => format(parseISO(d as string), "MMM d, yyyy")}
            formatter={(v: number) => ["$" + v.toLocaleString(), "Value"]}
          />
          <Area type="monotone" dataKey="value" stroke={color} strokeWidth={2} fill="url(#portfolioGrad)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
