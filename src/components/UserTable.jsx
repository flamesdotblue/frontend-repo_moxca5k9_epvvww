import React from 'react';
import { User } from 'lucide-react';

export default function UserTable({ users }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Users</h3>
        <span className="text-xs text-neutral-500">{users.length} total</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-neutral-50 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-300">
            <tr>
              <th className="text-left px-4 py-2 font-medium">User</th>
              <th className="text-right px-4 py-2 font-medium">Sessions</th>
              <th className="text-right px-4 py-2 font-medium">Revenue</th>
              <th className="text-right px-4 py-2 font-medium">Growth</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t border-neutral-100 dark:border-neutral-800">
                <td className="px-4 py-3 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <User size={16} />
                  </span>
                  <div>
                    <div className="font-medium text-neutral-800 dark:text-neutral-100">{u.name}</div>
                    <div className="text-xs text-neutral-500">{u.company}</div>
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-neutral-700 dark:text-neutral-200">{u.sessions.toLocaleString()}</td>
                <td className="px-4 py-3 text-right text-neutral-700 dark:text-neutral-200">${u.revenue.toLocaleString()}</td>
                <td className={`px-4 py-3 text-right text-xs font-medium ${u.growth >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>{u.growth >= 0 ? '+' : ''}{u.growth}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
