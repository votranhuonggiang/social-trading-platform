// components/Sidebar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside className={`bg-gray-50 border-r border-gray-200 transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'} min-h-screen flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        {isExpanded && <span className="font-bold text-lg text-gray-800">MiQuant</span>}
        <button onClick={() => setIsExpanded(!isExpanded)} className="p-1 hover:bg-gray-200 rounded">
          {isExpanded ? '<<' : '>>'}
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/platform" className="block px-2 py-2 rounded hover:bg-gray-200 text-gray-700">Platform</Link>
        <Link href="/platform/ai-ranking/1" className="block px-2 py-2 rounded hover:bg-gray-200 text-gray-700 font-semibold bg-gray-200">AI Ranking</Link>
        <Link href="/research" className="block px-2 py-2 rounded hover:bg-gray-200 text-gray-700">Research</Link>
      </nav>
      {isExpanded && (
        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-blue-600 text-white rounded py-2 font-medium">Upgrade to Pro</button>
        </div>
      )}
    </aside>
  );
}