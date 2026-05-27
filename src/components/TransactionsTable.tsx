import { Transaction } from "../types";

interface TransactionsTableProps {
  transactions: Transaction[];
}

const TYPE_COLORS: Record<string, { color: string; label: string }> = {
  buy:        { color: "#22c55e", label: "Buy"        },
  sell:       { color: "#ef4444", label: "Sell"       },
  dividend:   { color: "#3b82f6", label: "Dividend"   },
  deposit:    { color: "#8b5cf6", label: "Deposit"    },
  withdrawal: { color: "#f59e0b", label: "Withdrawal" },
};

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div style={{
      background: "#0f1117",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 12,
      overflow: "hidden",
    }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#f9fafb" }}>Recent Transactions</div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ fontSize: 11, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {["Date", "Type", "Symbol", "Qty", "Price", "Total", "Status"].map((h) => (
                <th key={h} style={{ padding: "12px 16px", textAlign: "right", fontWeight: 500, ...(h === "Date" ? { textAlign: "left" } : {}) }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => {
              const tc = TYPE_COLORS[t.type];
              return (
                <tr key={t.id} style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)", fontSize: 13 }}>
                  <td style={{ padding: "13px 16px", color: "#9ca3af" }}>{t.date}</td>
                  <td style={{ padding: "13px 16px", textAlign: "right" }}>
                    <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: tc.color, background: tc.color + "18", borderRadius: 4, padding: "2px 7px" }}>
                      {tc.label}
                    </span>
                  </td>
                  <td style={{ padding: "13px 16px", textAlign: "right", color: "#f9fafb", fontWeight: 600 }}>{t.symbol || "—"}</td>
                  <td style={{ padding: "13px 16px", textAlign: "right", color: "#d1d5db" }}>{t.quantity || "—"}</td>
                  <td style={{ padding: "13px 16px", textAlign: "right", color: "#d1d5db" }}>{t.price ? "$" + t.price.toLocaleString() : "—"}</td>
                  <td style={{ padding: "13px 16px", textAlign: "right", color: "#f9fafb", fontWeight: 500 }}>${t.total.toLocaleString()}</td>
                  <td style={{ padding: "13px 16px", textAlign: "right" }}>
                    <span style={{ fontSize: 10, color: t.status === "completed" ? "#22c55e" : t.status === "pending" ? "#f59e0b" : "#6b7280" }}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
