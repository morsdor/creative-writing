"use client";

import Link from "next/link";
import type { Month } from "@/lib/types";
import { MONTHS, QUARTERS } from "@/data/curriculum";
import { actions, useTracker } from "@/lib/store";
import { monthProgress, nextUp } from "@/lib/progress";
import { Card, Checkbox, Eyebrow, H2, ProgressBar, ResourceList, formatHours } from "@/components/ui";
import { WeekCard } from "@/components/WeekCard";

const SECTIONS = [
  ["concepts", "Concepts"],
  ["resources", "Read & watch"],
  ["weeks", "Weekly plan"],
  ["deliverables", "Deliverables"],
  ["notes", "Notes"],
] as const;

export function MonthView({ month }: { month: Month }) {
  const { state } = useTracker();
  const p = monthProgress(state, month);
  const next = nextUp(state);
  const quarter = QUARTERS.find((q) => q.n === month.quarter)!;
  const prev = MONTHS.find((m) => m.n === month.n - 1);
  const nxt = MONTHS.find((m) => m.n === month.n + 1);

  return (
    <div className="space-y-10">
      {/* Month strip */}
      <nav aria-label="Months" className="-mx-4 overflow-x-auto px-4">
        <ol className="flex min-w-max gap-1.5">
          {MONTHS.map((m) => {
            const mp = monthProgress(state, m);
            const active = m.n === month.n;
            return (
              <li key={m.n}>
                <Link
                  href={`/month/${m.n}`}
                  className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border text-sm tabular-nums transition-colors ${
                    active ? "border-ink bg-ink text-paper" : "border-line bg-card hover:border-muted"
                  }`}
                  title={`Month ${m.n}: ${m.title}`}
                >
                  {m.n}
                  {!active && mp.pct > 0 && (
                    <span className="absolute inset-x-0 bottom-0 h-[3px] bg-accent" style={{ width: `${mp.pct}%` }} />
                  )}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <Eyebrow>
          Quarter {quarter.n} · {quarter.title} — Month {month.n} of 12
        </Eyebrow>
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{month.title}</h1>
        <p className="max-w-3xl font-serif text-xl italic leading-relaxed text-muted">{month.question}</p>
        <p className="max-w-3xl leading-relaxed">{month.summary}</p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Tasks</span>
              <span className="tabular-nums">
                {p.done}/{p.total} · {formatHours(p.hoursDone)} of {formatHours(p.hoursTotal)}
              </span>
            </div>
            <ProgressBar pct={p.pct} className="mt-1.5" />
          </div>
          <p className="text-sm">
            <span className="text-muted">Deliverables </span>
            <span className="tabular-nums">
              {p.deliverablesDone}/{month.deliverables.length}
            </span>
          </p>
          {month.wordTarget && (
            <p className="rounded-md bg-accent-soft px-2.5 py-1 text-sm">
              <span className="text-muted">Novella target: </span>
              {month.wordTarget}
            </p>
          )}
        </div>
      </header>

      {/* Section jump links */}
      <nav aria-label="On this page" className="sticky top-0 z-20 sm:top-[57px] -mx-4 border-y border-line bg-paper/90 px-4 py-2 backdrop-blur">
        <ul className="flex gap-1 overflow-x-auto text-sm">
          {SECTIONS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="block whitespace-nowrap rounded-md px-2.5 py-1 text-muted hover:bg-sunken hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Concepts */}
      <section className="space-y-4">
        <H2 id="concepts">What to understand</H2>
        <dl className="grid gap-3 md:grid-cols-2">
          {month.concepts.map((c) => (
            <div key={c.term} className="rounded-xl border border-line bg-card p-4">
              <dt className="font-serif text-lg font-semibold leading-snug">{c.term}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{c.explain}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Resources */}
      <section className="space-y-4">
        <H2 id="resources">Read &amp; watch</H2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <Eyebrow>Craft books</Eyebrow>
            <div className="mt-3"><ResourceList items={month.craft} /></div>
          </Card>
          <Card>
            <Eyebrow>Lectures &amp; podcasts</Eyebrow>
            <div className="mt-3"><ResourceList items={month.lectures} /></div>
          </Card>
          <Card>
            <Eyebrow>Fiction</Eyebrow>
            <div className="mt-3"><ResourceList items={month.fiction} /></div>
          </Card>
          <Card>
            <Eyebrow>Hindi · the hedge (1 h/week)</Eyebrow>
            <div className="mt-3"><ResourceList items={month.hindi} /></div>
          </Card>
        </div>
        <Card>
          <Eyebrow>Questions to ask while reading</Eyebrow>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed">
            {month.readingQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Weeks */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <H2 id="weeks">Weekly plan</H2>
          <p className="text-sm text-muted">4 weeks × 10 hours. Use any 5th week of a calendar month as a buffer.</p>
        </div>
        <div className="space-y-5">
          {month.weeks.map((w) => (
            <WeekCard key={w.n} month={month} week={w} highlight={next?.month.n === month.n && next.week.n === w.n} />
          ))}
        </div>
      </section>

      {/* Deliverables + checks */}
      <section className="grid gap-4 lg:grid-cols-[3fr_2fr]">
        <Card id="deliverables">
          <H2>Deliverables</H2>
          <p className="mt-1 text-sm text-muted">What should exist by the end of the month.</p>
          <ul className="mt-4 space-y-3">
            {month.deliverables.map((d) => {
              const checked = !!state.done[d.id];
              return (
                <li key={d.id} className="flex gap-3">
                  <Checkbox checked={checked} onChange={() => actions.toggle(d.id)} label={d.text} />
                  <span className={checked ? "text-muted line-through decoration-line" : ""}>{d.text}</span>
                </li>
              );
            })}
          </ul>
        </Card>
        <div className="space-y-4">
          <Card>
            <Eyebrow>Self-check</Eyebrow>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed">
              {month.selfCheck.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <Eyebrow>Watch out for</Eyebrow>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed">
              {month.pitfalls.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Notes */}
      <section className="space-y-3">
        <H2 id="notes">Notes for this month</H2>
        <textarea
          value={state.notes[String(month.n)] ?? ""}
          onChange={(e) => actions.setNote(month.n, e.target.value)}
          rows={6}
          placeholder="Reflections, things to remember, what to carry into next month…"
          className="w-full rounded-xl border border-line bg-card p-4 leading-relaxed outline-none focus:border-muted"
        />
      </section>

      {/* Prev / next */}
      <nav className="flex justify-between gap-4 border-t border-line pt-6 text-sm">
        {prev ? (
          <Link href={`/month/${prev.n}`} className="group">
            <span className="text-muted">← Month {prev.n}</span>
            <span className="block font-serif text-lg group-hover:text-accent">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {nxt && (
          <Link href={`/month/${nxt.n}`} className="group text-right">
            <span className="text-muted">Month {nxt.n} →</span>
            <span className="block font-serif text-lg group-hover:text-accent">{nxt.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
