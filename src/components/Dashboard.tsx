"use client";

import Link from "next/link";
import type { TrackId } from "@/lib/types";
import { getTrack } from "@/data/tracks";
import { useTracker } from "@/lib/store";
import { calendarWeek, categoryHours, logTotals, monthProgress, nextUp, overallProgress } from "@/lib/progress";
import { CAT_BG, CAT_TEXT, Card, Eyebrow, H2, ProgressBar, ProgressRing, formatHours } from "@/components/ui";
import { WeekCard } from "@/components/WeekCard";

export function Dashboard({ trackId }: { trackId: TrackId }) {
  const track = getTrack(trackId);
  const base = `/${trackId}`;
  const { state, hydrated } = useTracker(trackId);
  const overall = overallProgress(state, track);
  const next = nextUp(state, track);
  const cats = categoryHours(state, track);
  const logs = logTotals(state);
  const calWeek = calendarWeek(state.startDate);
  const planWeek = next ? next.index : 48;
  const isFresh = overall.done === 0;

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div className="space-y-3">
          <Eyebrow>Your fiction year · {track.name} track</Eyebrow>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {isFresh ? "Twelve months. Ten hours a week. One finished novella." : next ? `Month ${next.month.n}: ${next.month.title}` : "You finished the year."}
          </h1>
          <p className="max-w-2xl leading-relaxed text-muted">
            {isFresh
              ? track.intro
              : next
                ? next.month.question
                : "Every task is ticked. Write your Year 2 plan and start the next thing."}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {next && (
              <Link href={`${base}/month/${next.month.n}#week-${next.week.n}`} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-ink hover:opacity-90">
                {isFresh ? "Start Month 1" : `Open Month ${next.month.n}`}
              </Link>
            )}
            <Link href={`${base}/guide`} className="rounded-md border border-line bg-card px-4 py-2 text-sm hover:border-muted">
              How the year works
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5 md:flex-col md:items-center">
          <ProgressRing pct={hydrated ? overall.pct : 0} />
          <p className="text-sm text-muted md:text-center">
            <span className="tabular-nums text-ink">{overall.done}</span> of {overall.total} tasks
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Planned hours done" value={formatHours(overall.hoursDone)} sub={`of ${overall.hoursTotal} h`} />
        <Stat label="Words logged" value={logs.words.toLocaleString()} sub={`${logs.weeksLogged} weeks logged`} />
        <Stat label="Deliverables" value={`${overall.deliverablesDone}`} sub={`of ${overall.deliverablesTotal}`} />
        <Stat
          label="Pace"
          value={calWeek === null ? "—" : `Week ${Math.min(calWeek, 52)}`}
          sub={
            calWeek === null ? (
              <Link href="/settings" className="underline underline-offset-2">Set a start date</Link>
            ) : (
              paceText(calWeek, planWeek)
            )
          }
        />
      </section>

      {/* This week */}
      {next && (
        <section className="space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <H2>This week</H2>
            <Link href={`${base}/month/${next.month.n}`} className="text-sm text-muted underline underline-offset-2 hover:text-ink">
              Full month plan →
            </Link>
          </div>
          <WeekCard track={trackId} month={next.month} week={next.week} showMonth />
        </section>
      )}

      {/* Year map */}
      <section className="space-y-4">
        <H2>The year</H2>
        <div className="space-y-6">
          {track.quarters.map((q) => (
            <div key={q.n}>
              <div className="mb-3 flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-serif text-lg font-semibold">Q{q.n} · {q.title}</h3>
                <p className="text-sm text-muted">{q.goal}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {track.months.filter((m) => m.quarter === q.n).map((m) => {
                  const p = monthProgress(state, m);
                  const current = next?.month.n === m.n;
                  return (
                    <Link
                      key={m.n}
                      href={`${base}/month/${m.n}`}
                      className={`group rounded-xl border bg-card p-4 transition-colors hover:border-muted ${current ? "border-accent" : "border-line"}`}
                    >
                      <div className="flex items-center justify-between">
                        <Eyebrow>Month {m.n}</Eyebrow>
                        {p.pct === 100 ? (
                          <span className="text-xs font-medium text-accent">Done</span>
                        ) : current ? (
                          <span className="text-xs font-medium text-accent">Current</span>
                        ) : null}
                      </div>
                      <p className="mt-1 font-serif text-lg font-semibold leading-snug group-hover:text-accent">{m.title}</p>
                      {m.altTitle && <p className="text-sm text-muted" lang="hi">{m.altTitle}</p>}
                      <ProgressBar pct={p.pct} className="mt-3" />
                      <p className="mt-1.5 text-xs tabular-nums text-muted">
                        {p.done}/{p.total} tasks · {p.deliverablesDone}/{m.deliverables.length} deliverables
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hours by category */}
      <section className="space-y-4">
        <H2>Where the hours go</H2>
        <Card>
          <ul className="space-y-4">
            {track.budget.map((b) => {
              const c = cats[b.category];
              const pct = c.total ? Math.round((c.done / c.total) * 100) : 0;
              return (
                <li key={b.category} className="grid gap-2 sm:grid-cols-[180px_1fr_120px] sm:items-center">
                  <div>
                    <p className={`text-sm font-semibold ${CAT_TEXT[b.category]}`}>{b.label}</p>
                    <p className="text-xs text-muted">{formatHours(b.hours)} / week</p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-sunken">
                    <div className={`h-full rounded-full ${CAT_BG[b.category]}`} style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-sm tabular-nums text-muted sm:text-right">
                    {formatHours(c.done)} / {formatHours(c.total)}
                  </p>
                </li>
              );
            })}
          </ul>
        </Card>
      </section>
    </div>
  );
}

function paceText(calWeek: number, planWeek: number) {
  if (calWeek === 0) return "Starts soon";
  const diff = calWeek - planWeek;
  if (diff <= 0) return "On plan";
  if (diff <= 4) return `${diff} wk behind (within the 4 buffer weeks)`;
  return `${diff} wk behind. Cut reading, not writing.`;
}

function Stat({ label, value, sub }: { label: string; value: string; sub: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-line bg-card p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-serif text-2xl font-semibold tabular-nums">{value}</p>
      <p className="mt-0.5 text-xs text-muted">{sub}</p>
    </div>
  );
}
