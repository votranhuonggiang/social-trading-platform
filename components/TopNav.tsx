// components/TopNav.tsx
"use client";

import Link from 'next/link';

export default function TopNav() {
  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-800">← Back</button>
        <div className="text-sm text-gray-500">Platform / AI Ranking</div>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="border border-gray-300 rounded px-3 py-1 text-sm" />
        <Link href="/tasks" className="text-gray-600 hover:text-gray-900 text-sm">Tasks</Link>
        <Link href="/charts" className="text-gray-600 hover:text-gray-900 text-sm">Charts</Link>
      </div>
    </header>
  );
}