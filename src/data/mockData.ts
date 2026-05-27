import { Position, PortfolioSnapshot, Transaction, PortfolioMetrics } from "../types";

export const POSITIONS: Position[] = [
  { id: "1", symbol: "AAPL",  name: "Apple Inc.",             quantity: 50,   avgPrice: 165.20, currentPrice: 189.84, marketValue: 9492,   pnl: 1232,   pnlPct: 14.9, asset: "stock"  },
  { id: "2", symbol: "MSFT",  name: "Microsoft Corp.",         quantity: 25,   avgPrice: 310.50, currentPrice: 446.35, marketValue: 11158,  pnl: 3396,   pnlPct: 43.7, asset: "stock"  },
  { id: "3", symbol: "NVDA",  name: "NVIDIA Corp.",            quantity: 15,   avgPrice: 480.00, currentPrice: 1208.88,marketValue: 18133,  pnl: 10933,  pnlPct: 151.9,asset: "stock"  },
  { id: "4", symbol: "BTC",   name: "Bitcoin",                 quantity: 0.42, avgPrice: 42000,  currentPrice: 67450,  marketValue: 28329,  pnl: 10689,  pnlPct: 60.6, asset: "crypto" },
  { id: "5", symbol: "ETH",   name: "Ethereum",                quantity: 4.5,  avgPrice: 2100,   currentPrice: 3540,   marketValue: 15930,  pnl: 6480,   pnlPct: 68.6, asset: "crypto" },
  { id: "6", symbol: "SPY",   name: "SPDR S&P 500 ETF",        quantity: 30,   avgPrice: 420.00, currentPrice: 537.98, marketValue: 16139,  pnl: 3539,   pnlPct: 27.9, asset: "etf"    },
  { id: "7", symbol: "GOOGL", name: "Alphabet Inc.",           quantity: 20,   avgPrice: 128.00, currentPrice: 178.02, marketValue: 3560,   pnl: 1000,   pnlPct: 39.1, asset: "stock"  },
  { id: "8", symbol: "EURUSD",name: "Euro / US Dollar",        quantity: 10000,avgPrice: 1.0820, currentPrice: 1.0735, marketValue: 10735,  pnl: -85,    pnlPct: -0.8, asset: "forex"  },
];

export const METRICS: PortfolioMetrics = {
  totalValue:    113476,
  cashBalance:   12850,
  investedValue: 100626,
  totalPnl:      36184,
  totalPnlPct:   47.1,
  dayChange:     1842,
  dayChangePct:  1.65,
};

export const PORTFOLIO_HISTORY: PortfolioSnapshot[] = (() => {
  const base = 76000;
  const now = new Date();
  return Array.from({ length: 90 }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (89 - i));
    const noise = (Math.random() - 0.42) * 2800;
    const trend = i * 415;
    const value = Math.round(base + trend + noise);
    return {
      date: d.toISOString().split("T")[0],
      value,
      cash: 12850,
    };
  });
})();

export const TRANSACTIONS: Transaction[] = [
  { id: "t1", date: "2026-05-24", symbol: "NVDA",  type: "buy",        quantity: 5,    price: 1198.40, total: 5992,   status: "completed" },
  { id: "t2", date: "2026-05-22", symbol: "BTC",   type: "buy",        quantity: 0.1,  price: 66200,   total: 6620,   status: "completed" },
  { id: "t3", date: "2026-05-20", symbol: "AAPL",  type: "sell",       quantity: 10,   price: 191.20,  total: 1912,   status: "completed" },
  { id: "t4", date: "2026-05-18", symbol: "SPY",   type: "buy",        quantity: 5,    price: 530.10,  total: 2650,   status: "completed" },
  { id: "t5", date: "2026-05-15", symbol: "MSFT",  type: "dividend",   quantity: 25,   price: 0.94,    total: 23.50,  status: "completed" },
  { id: "t6", date: "2026-05-12", symbol: "ETH",   type: "buy",        quantity: 1.5,  price: 3480,    total: 5220,   status: "completed" },
  { id: "t7", date: "2026-05-10", symbol: "",       type: "deposit",    quantity: 0,    price: 0,       total: 10000,  status: "completed" },
  { id: "t8", date: "2026-05-08", symbol: "GOOGL", type: "buy",        quantity: 5,    price: 172.40,  total: 862,    status: "completed" },
];
