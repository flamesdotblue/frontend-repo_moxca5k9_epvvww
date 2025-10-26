import React, { useMemo } from 'react';

function LineChart({ data, color = '#10b981' }) {
  const width = 600;
  const height = 220;
  const padding = 32;

  const points = useMemo(() => {
    if (!data || data.length === 0) return '';
    const xs = data.map((d, i) => i);
    const ys = data.map((d) => d);
    const xMax = Math.max(...xs);
    const yMax = Math.max(...ys);
    const yMin = Math.min(...ys);
    const range = Math.max(yMax - yMin, 1);
    return data
      .map((d, i) => {
        const x = padding + (i / Math.max(xMax, 1)) * (width - padding * 2);
        const y = height - padding - ((d - yMin) / range) * (height - padding * 2);
        return `${x},${y}`;
      })
      .join(' ');
  }, [data]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-56 w-full">
      <defs>
        <linearGradient id="gradLine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke={color} strokeWidth="2.5" points={points} />
      <polygon
        fill="url(#gradLine)"
        points={`${points} ${width - 32},${height - 32} 32,${height - 32}`}
      />
    </svg>
  );
}

function BarChart({ data, color = '#6366f1' }) {
  const width = 600;
  const height = 220;
  const padding = 24;
  const max = Math.max(...data, 1);
  const barW = (width - padding * 2) / data.length - 8;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-56 w-full">
      {data.map((d, i) => {
        const h = ((d / max) * (height - padding * 2)) | 0;
        const x = padding + i * (barW + 8);
        const y = height - padding - h;
        return <rect key={i} x={x} y={y} width={barW} height={h} rx="6" fill={color} />;
      })}
    </svg>
  );
}

export default function AnalyticsCharts({ users }) {
  const traffic = users.map((u) => u.sessions);
  const revenueSeries = users.map((u) => u.revenue);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Sessions trend</h3>
          <span className="text-xs text-neutral-500">Last period</span>
        </div>
        <LineChart data={traffic} color="#10b981" />
      </div>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Revenue per user</h3>
          <span className="text-xs text-neutral-500">USD</span>
        </div>
        <BarChart data={revenueSeries} color="#6366f1" />
      </div>
    </div>
  );
}
