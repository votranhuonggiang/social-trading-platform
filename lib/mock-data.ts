// lib/mock-data.ts
export interface Metric {
  label: string;
  value: string;
  trend: 'positive' | 'negative' | 'neutral';
  statusColor: 'green' | 'red' | 'gray';
}

export interface Portfolio {
  id: string;
  name: string;
  tags: string[];
  metrics: Metric[];
  strategyInfo: Record<string, string>;
}

export const mockPortfolio: Portfolio = {
  id: "1",
  name: "MOMENTUM VN30",
  tags: ["VN30", "Monthly", "Hot", "New"],
  metrics: [
    { label: "YTD Return", value: "+14.20%", trend: "positive", statusColor: "green" },
    { label: "Max Drawdown", value: "-9.10%", trend: "negative", statusColor: "red" },
    { label: "Sharpe Ratio", value: "1.25", trend: "positive", statusColor: "green" }
  ],
  strategyInfo: {
    "Asset Class": "Equities",
    "Region": "Vietnam",
    "Rebalancing": "Monthly",
    "Target Benchmark": "VN30 Index"
  }
};
