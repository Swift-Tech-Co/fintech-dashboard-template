import { MetricCard } from "./components/MetricCard";
import { PortfolioChart } from "./components/PortfolioChart";
import { PositionsTable } from "./components/PositionsTable";
import { TransactionsTable } from "./components/TransactionsTable";
import { METRICS, POSITIONS, PORTFOLIO_HISTORY, TRANSACTIONS } from "./data/mockData";

const NAV_ITEMS = ["Dashboard", "Positions", "Transactions", "Analytics", "Watchlist", "Settings"];

export default function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#080b12", color: "#f9fafb", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Sidebar */}
      <aside style={{ width: 220, background: "#0a0d16", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "28px 0", flexShrink: 0, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "0 20px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#f9fafb", letterSpacing: "-0.02em" }}>FinTech</div>
          <div style={{ fontSize: 11, color: "#4b5563", marginTop: 2 }}>Portfolio Dashboard</div>
        </div>
        <nav style={{ padding: "16px 12px", flex: 1 }}>
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 12px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? "#f9fafb" : "#6b7280",
                background: i === 0 ? "rgba(255,255,255,0.07)" : "transparent",
                marginBottom: 2,
                transition: "all 0.15s",
              }}
            >
              {item}
            </button>
          ))}
        </nav>
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ fontSize: 12, color: "#374151", fontWeight: 500 }}>Swift Tech Co.</div>
          <div style={{ fontSize: 11, color: "#1f2937" }}>swifttechco.com</div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#f9fafb", margin: 0, letterSpacing: "-0.02em" }}>Dashboard</h1>
            <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0 0" }}>Last updated: {new Date().toLocaleString()}</p>
          </div>
          <button style={{ padding: "10px 20px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            + New Trade
          </button>
        </div>

        {/* Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          <MetricCard
            label="Total Portfolio Value"
            value={"$" + METRICS.totalValue.toLocaleString()}
            change={`$${METRICS.dayChange.toLocaleString()} (${METRICS.dayChangePct}%) today`}
            changePositive={METRICS.dayChange >= 0}
          />
          <MetricCard
            label="Total P&L"
            value={`$${METRICS.totalPnl.toLocaleString()}`}
            change={`${METRICS.totalPnlPct.toFixed(1)}% all time`}
            changePositive={METRICS.totalPnl >= 0}
          />
          <MetricCard
            label="Invested"
            value={"$" + METRICS.investedValue.toLocaleString()}
            sub={`${((METRICS.investedValue / METRICS.totalValue) * 100).toFixed(0)}% of portfolio`}
          />
          <MetricCard
            label="Cash Balance"
            value={"$" + METRICS.cashBalance.toLocaleString()}
            sub={`${((METRICS.cashBalance / METRICS.totalValue) * 100).toFixed(0)}% of portfolio`}
          />
        </div>

        {/* Chart */}
        <div style={{ marginBottom: 24 }}>
          <PortfolioChart data={PORTFOLIO_HISTORY} />
        </div>

        {/* Positions */}
        <div style={{ marginBottom: 24 }}>
          <PositionsTable positions={POSITIONS} />
        </div>

        {/* Transactions */}
        <TransactionsTable transactions={TRANSACTIONS} />
      </main>
    </div>
  );
}
