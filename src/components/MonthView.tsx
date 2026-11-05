"use client";

import Link from "next/link";
import type { TrackId } from "@/lib/types";
import { getMonth, getTrack } from "@/data/tracks";
import { trackActions, useTracker } from "@/lib/store";
import { monthProgress, nextUp } from "@/lib/progress";
import { Card, Checkbox, Eyebrow, H2, ProgressBar, ResourceList } from "@/components/ui";
import { ui } from "@/lib/i18n";
import { WeekCard } from "@/components/WeekCard";

const SECTION_IDS = ["concepts", "resources", "weeks", "deliverables", "notes"] as const;

export function MonthView({ trackId, n }: { trackId: TrackId; n: number }) {
  const track = getTrack(trackId);
  const month = getMonth(track, n)!;
  const { state } = useTracker(trackId);
  const actions = trackActions(trackId);
  const p = monthProgress(state, month);
  const next = nextUp(state, track);
  const quarter = track.quarters.find((q) => q.n === month.quarter)!;
  const prev = getMonth(track, month.n - 1);
  const nxt = getMonth(track, month.n + 1);
  const base = `/${trackId}`;
  const t = ui(trackId);

  return (
    <div className="space-y-10" lang={t.htmlLang}>
      {/* Month strip */}
      <nav aria-label="Months" className="-mx-4 overflow-x-auto px-4">
        <ol className="flex min-w-max gap-1.5">
          {track.months.map((m) => {
            const mp = monthProgress(state, m);
            const active = m.n === month.n;
            return (
              <li key={m.n}>
                <Link
                  href={`${base}/month/${m.n}`}
                  className={`relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border text-sm tabular-nums transition-colors ${
                    active ? "border-ink bg-ink text-paper" : "border-line bg-card hover:border-muted"
                  }`}
                  title={`${t.monthN(m.n)}: ${m.title}`}
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
          {t.trackName} · {t.quarterShort(quarter.n)} {quarter.title} — {t.monthOf(month.n)}
        </Eyebrow>
        <div>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{month.title}</h1>
          {month.altTitle && <p className="mt-1 font-serif text-2xl text-muted" lang="hi">{month.altTitle}</p>}
        </div>
        <p className="max-w-3xl font-serif text-xl italic leading-relaxed text-muted">{month.question}</p>
        <p className="max-w-3xl leading-relaxed">{month.summary}</p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-sm">
              <span className="text-muted">{t.tasks}</span>
              <span className="tabular-nums">
                {p.done}/{p.total} · {t.hoursOf(t.hours(p.hoursDone), t.hours(p.hoursTotal))}
              </span>
            </div>
            <ProgressBar pct={p.pct} className="mt-1.5" />
          </div>
          <p className="text-sm">
            <span className="text-muted">{t.deliverables} </span>
            <span className="tabular-nums">
              {p.deliverablesDone}/{month.deliverables.length}
            </span>
          </p>
          {month.wordTarget && (
            <p className="rounded-md bg-accent-soft px-2.5 py-1 text-sm">
              <span className="text-muted">{t.novellaTarget}</span>
              {month.wordTarget}
            </p>
          )}
        </div>
      </header>

      {/* Section jump links */}
      <nav aria-label="On this page" className="sticky top-0 z-20 -mx-4 border-y border-line bg-paper/90 px-4 py-2 backdrop-blur sm:top-[57px]">
        <ul className="flex gap-1 overflow-x-auto text-sm">
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="block whitespace-nowrap rounded-md px-2.5 py-1 text-muted hover:bg-sunken hover:text-ink">
                {t.sections[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Concepts */}
      <section className="space-y-4">
        <H2 id="concepts">{t.whatToUnderstand}</H2>
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
        <H2 id="resources">{t.readWatch}</H2>
        <div className="grid gap-4 md:grid-cols-2">
          {month.shelves.map((s) => (
            <Card key={s.label}>
              <Eyebrow>{s.label}</Eyebrow>
              <div className="mt-3">
                <ResourceList items={s.items} readLabel={t.readWhat} />
              </div>
            </Card>
          ))}
        </div>
        <Card>
          <Eyebrow>{t.readingQuestions}</Eyebrow>
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
          <H2 id="weeks">{t.weeklyPlan}</H2>
          <p className="text-sm text-muted">{t.weeklyPlanHint}</p>
        </div>
        <div className="space-y-5">
          {month.weeks.map((w) => (
            <WeekCard key={w.n} track={trackId} month={month} week={w} highlight={next?.month.n === month.n && next.week.n === w.n} />
          ))}
        </div>
      </section>

      {/* Deliverables + checks */}
      <section className="grid gap-4 lg:grid-cols-[3fr_2fr]">
        <Card id="deliverables">
          <H2>{t.deliverables}</H2>
          <p className="mt-1 text-sm text-muted">{t.deliverablesHint}</p>
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
            <Eyebrow>{t.selfCheck}</Eyebrow>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed">
              {month.selfCheck.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <Eyebrow>{t.pitfalls}</Eyebrow>
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
        <H2 id="notes">{t.notesTitle}</H2>
        <textarea
          value={state.notes[String(month.n)] ?? ""}
          onChange={(e) => actions.setNote(month.n, e.target.value)}
          rows={6}
          placeholder={t.notesPlaceholder}
          className="w-full rounded-xl border border-line bg-card p-4 leading-relaxed outline-none focus:border-muted"
        />
      </section>

      {/* Prev / next */}
      <nav className="flex justify-between gap-4 border-t border-line pt-6 text-sm">
        {prev ? (
          <Link href={`${base}/month/${prev.n}`} className="group">
            <span className="text-muted">← {t.monthN(prev.n)}</span>
            <span className="block font-serif text-lg group-hover:text-accent">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {nxt && (
          <Link href={`${base}/month/${nxt.n}`} className="group text-right">
            <span className="text-muted">{t.monthN(nxt.n)} →</span>
            <span className="block font-serif text-lg group-hover:text-accent">{nxt.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
