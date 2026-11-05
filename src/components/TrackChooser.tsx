"use client";

import Link from "next/link";
import type { Track } from "@/lib/types";
import { TRACKS } from "@/data/tracks";
import { useTracker } from "@/lib/store";
import { nextUp, overallProgress } from "@/lib/progress";
import { CAT_BG, Eyebrow, ProgressBar } from "@/components/ui";

export function TrackChooser() {
  return (
    <div className="space-y-10">
      <header className="max-w-3xl space-y-4">
        <Eyebrow>Fiction Year · 10 hours a week</Eyebrow>
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Twelve months. One language. One finished novella.</h1>
        <p className="text-lg leading-relaxed text-muted">
          Two complete, separate years: one taught entirely in English, one read and written entirely in Hindi. Same structure, same 10 hours a week, different books. Each keeps its own progress.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {TRACKS.map((t) => (
          <TrackCard key={t.id} track={t} />
        ))}
      </div>

      <p className="max-w-3xl text-sm leading-relaxed text-muted">
        Pick one. Running both at once means 20 hours a week. If you finish one track and want the other, the craft carries over, so the second year goes faster.
      </p>
    </div>
  );
}

function TrackCard({ track }: { track: Track }) {
  const { state, hydrated } = useTracker(track.id);
  const p = overallProgress(state, track);
  const next = nextUp(state, track);
  const started = hydrated && p.done > 0;

  return (
    <Link href={`/${track.id}`} className="group flex flex-col rounded-xl border border-line bg-card p-6 transition-colors hover:border-muted">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-serif text-3xl font-semibold tracking-tight group-hover:text-accent">
          {track.id === "hindi" ? <span lang="hi">{track.nativeName}</span> : track.name}
        </h2>
        <span className="text-sm text-muted">{track.name} track</span>
      </div>
      <p className="mt-2 leading-relaxed">{track.tagline}</p>

      <div className="mt-5 flex h-2.5 overflow-hidden rounded-full" aria-label="Weekly hours by category">
        {track.budget.map((b) => (
          <div key={b.category} className={CAT_BG[b.category]} style={{ width: `${b.hours * 10}%` }} title={`${b.label}: ${b.hours} h`} />
        ))}
      </div>
      <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
        {track.budget.map((b) => (
          <li key={b.category}>
            {b.label} {b.hours} h
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        {started ? (
          <>
            <div className="flex justify-between text-sm">
              <span className="text-muted">{next ? `Month ${next.month.n} · Week ${next.week.n}` : "Year complete"}</span>
              <span className="tabular-nums">{p.pct}%</span>
            </div>
            <ProgressBar pct={p.pct} className="mt-1.5" />
          </>
        ) : (
          <span className="inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-ink">Open the {track.name} track →</span>
        )}
      </div>
    </Link>
  );
}
