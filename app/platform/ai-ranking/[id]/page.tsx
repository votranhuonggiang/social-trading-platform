// app/platform/ai-ranking/[id]/page.tsx
import { mockPortfolio } from '@/lib/mock-data';
import MetricCard from '@/components/MetricCard';
import TabNavigation from '@/components/TabNavigation';

// Note: Next.js 15+ searchParams are asynchronous and must be awaited or handled properly
export default async function AIRankingPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const resolvedParams = await searchParams;
  const tab = resolvedParams.tab || 'overview';

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Entity Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{mockPortfolio.name}</h1>
          <div className="flex space-x-2">
            {mockPortfolio.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-600 border border-gray-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition-colors">
          Invest
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mockPortfolio.metrics.map(metric => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      {/* Tabs */}
      <TabNavigation />

      {/* Tab Content Area */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 min-h-[400px]">
        {tab === 'overview' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Performance over time</h2>
            <div className="w-full h-64 bg-white border border-gray-200 rounded flex items-center justify-center text-gray-400 mb-8">
              [Cumulative Profit Chart Placeholder]
            </div>
            
            <h2 className="text-xl font-bold mb-4">Strategy Information</h2>
            <div className="grid grid-cols-2 gap-4 bg-white p-4 border border-gray-200 rounded">
              {Object.entries(mockPortfolio.strategyInfo).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-sm text-gray-500">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === 'strategy' && <div className="text-gray-500">Strategy Results content goes here.</div>}
        {tab === 'allocation' && <div className="text-gray-500">Portfolio Allocation content goes here.</div>}
      </div>
    </div>
  );
}
