export interface Position {
  id: string;
  symbol: string;
  name: string;
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  marketValue: number;
  pnl: number;
  pnlPct: number;
  asset: "stock" | "crypto" | "etf" | "forex";
}

export interface PortfolioSnapshot {
  date: string;
  value: number;
  cash: number;
}

export interface Transaction {
  id: string;
  date: string;
  symbol: string;
  type: "buy" | "sell" | "dividend" | "deposit" | "withdrawal";
  quantity: number;
  price: number;
  total: number;
  status: "completed" | "pending" | "cancelled";
}

export interface PortfolioMetrics {
  totalValue: number;
  cashBalance: number;
  investedValue: number;
  totalPnl: number;
  totalPnlPct: number;
  dayChange: number;
  dayChangePct: number;
}
