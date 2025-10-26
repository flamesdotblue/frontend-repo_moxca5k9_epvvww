import React from 'react';
import HeroCover from './components/HeroCover';
import ThemeToggle from './components/ThemeToggle';
import StatsCards from './components/StatsCards';
import AnalyticsCharts from './components/AnalyticsCharts';
import UserTable from './components/UserTable';
import { Rocket } from 'lucide-react';

const mockUsers = [
  { id: 'u1', name: 'Ava Collins', company: 'Nova Labs', sessions: 1240, revenue: 12900, growth: 12 },
  { id: 'u2', name: 'Leo Hunt', company: 'Quanta Inc.', sessions: 980, revenue: 8300, growth: 5 },
  { id: 'u3', name: 'Maya Patel', company: 'Orbitry', sessions: 1530, revenue: 15200, growth: 18 },
  { id: 'u4', name: 'Kai Nguyen', company: 'Voxel Co.', sessions: 720, revenue: 4100, growth: -3 },
  { id: 'u5', name: 'Noah Kim', company: 'Pulseware', sessions: 1120, revenue: 9900, growth: 7 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white">
              <Rocket size={16} />
            </span>
            <span className="font-semibold tracking-tight">Viora</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero with Spline cover */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        <HeroCover />

        {/* Dashboard */}
        <section id="dashboard" className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Dashboard</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Insights across all users</p>
            </div>
          </div>

          <StatsCards users={mockUsers} />
          <AnalyticsCharts users={mockUsers} />
          <UserTable users={mockUsers} />
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-neutral-500">
          Built with care • Dark and light theme supported
        </footer>
      </main>
    </div>
  );
}
