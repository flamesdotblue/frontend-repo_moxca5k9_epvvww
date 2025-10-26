import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-black">
      {/* Spline 3D scene as full background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/30 mb-4">
          Live multi-tenant analytics
        </span>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          A clean SaaS dashboard for your data
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-neutral-300">
          Visualize metrics for multiple users with interactive charts, a beautiful dark theme, and a focus on clarity.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#dashboard"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            View Dashboard
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-4 py-2 text-sm font-medium ring-1 ring-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
