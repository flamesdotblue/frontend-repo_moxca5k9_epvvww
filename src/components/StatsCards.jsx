import React from 'react';
import { Users, Activity, DollarSign, TrendingUp } from 'lucide-react';

const accentClasses = {
  emerald: { container: 'bg-emerald-500/10', text: 'text-emerald-500' },
  blue: { container: 'bg-blue-500/10', text: 'text-blue-500' },
  amber: { container: 'bg-amber-500/10', text: 'text-amber-500' },
  violet: { container: 'bg-violet-500/10', text: 'text-violet-500' },
};

function StatCard({ title, value, icon: Icon, delta, accent = 'emerald' }) {
  const deltaPositive = (delta ?? 0) >= 0;
  const a = accentClasses[accent] || accentClasses.emerald;
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{title}</p>
        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${a.container} ${a.text}`}>
          <Icon size={16} />
        </span>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold text-neutral-900 dark:text-white">{value}</p>
        {typeof delta === 'number' && (
          <span className={`text-xs font-medium ${deltaPositive ? 'text-emerald-500' : 'text-red-500'}`}>
            {deltaPositive ? '+' : ''}{delta}%
          </span>
        )}
      </div>
    </div>
  );
}

export default function StatsCards({ users }) {
  const totalUsers = users.length;
  const totalSessions = users.reduce((sum, u) => sum + u.sessions, 0);
  const totalRevenue = users.reduce((sum, u) => sum + u.revenue, 0);
  const avgGrowth = Math.round(
    users.reduce((sum, u) => sum + u.growth, 0) / Math.max(totalUsers, 1)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard title="Active Users" value={totalUsers} icon={Users} delta={avgGrowth} accent="emerald" />
      <StatCard title="Sessions" value={totalSessions.toLocaleString()} icon={Activity} delta={5} accent="blue" />
      <StatCard title="Revenue" value={`$${totalRevenue.toLocaleString()}`} icon={DollarSign} delta={12} accent="amber" />
      <StatCard title="Growth" value={`${avgGrowth}%`} icon={TrendingUp} delta={avgGrowth} accent="violet" />
    </div>
  );
}
