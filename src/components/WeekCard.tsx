"use client";

import { useState } from "react";
import type { Month, TrackId, Week } from "@/lib/types";
import { trackActions, useTracker } from "@/lib/store";
import { logKey, weekProgress } from "@/lib/progress";
import { CategoryBadge, Checkbox, ProgressBar } from "@/components/ui";
import { ui } from "@/lib/i18n";

export function WeekCard({ track, month, week, highlight = false, showMonth = false }: { track: TrackId; month: Month; week: Week; highlight?: boolean; showMonth?: boolean }) {
  const { state } = useTracker(track);
  const actions = trackActions(track);
  const t = ui(track);
  const p = weekProgress(state, week);
  const allDone = p.done === p.total;

  return (
    <article
      id={`week-${week.n}`}
      className={`rounded-xl border bg-card ${highlight ? "border-accent shadow-[0_0_0_3px_var(--accent-soft)]" : "border-line"}`}
    >
      <header className="flex flex-wrap items-start justify-between gap-3 border-b border-line px-5 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            {showMonth ? `${t.monthN(month.n)} · ` : ""}{t.weekN(week.n)}
            {highlight && <span className="ml-2 rounded bg-accent px-1.5 py-0.5 text-accent-ink">{t.nextUp}</span>}
          </p>
          <h3 className="mt-1 font-serif text-lg font-semibold leading-snug">{week.focus}</h3>
        </div>
        <div className="min-w-[140px] text-right">
          <p className="text-sm tabular-nums">
            <span className="font-semibold">{t.hours(p.hoursDone)}</span>
            <span className="text-muted"> / {t.hours(p.hoursTotal)}</span>
          </p>
          <ProgressBar pct={p.pct} className="mt-1.5" />
          <button
            type="button"
            onClick={() => actions.setMany(week.tasks.map((t) => t.id), !allDone)}
            className="mt-2 text-xs text-muted underline underline-offset-2 hover:text-ink"
          >
            {allDone ? t.uncheckAll : t.markWeekDone}
          </button>
        </div>
      </header>

      <ul className="divide-y divide-line">
        {week.tasks.map((task) => {
          const checked = !!state.done[task.id];
          return (
            <li key={task.id} className="flex gap-3 px-5 py-3.5">
              <Checkbox checked={checked} onChange={() => actions.toggle(task.id)} label={task.title} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <CategoryBadge category={task.category} label={t.category[task.category]} />
                  <span className="text-xs tabular-nums text-muted">{t.hours(task.hours)}</span>
                </div>
                <p className={`mt-1 leading-snug ${checked ? "text-muted line-through decoration-line" : ""}`}>{task.title}</p>
                {task.detail && <p className="mt-1 text-sm leading-relaxed text-muted">{task.detail}</p>}
              </div>
            </li>
          );
        })}
      </ul>

      <WeekLogRow track={track} month={month.n} week={week.n} />
    </article>
  );
}

function WeekLogRow({ track, month, week }: { track: TrackId; month: number; week: number }) {
  const { state } = useTracker(track);
  const actions = trackActions(track);
  const t = ui(track);
  const key = logKey(month, week);
  const log = state.logs[key] ?? {};
  const [open, setOpen] = useState(false);
  const has = !!(log.hours || log.words || log.note);

  return (
    <footer className="border-t border-line bg-sunken/50 px-5 py-3 text-sm rounded-b-xl">
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between text-left text-muted hover:text-ink">
        <span>
          {t.weeklyLog}
          {has && (
            <span className="ml-2 tabular-nums text-ink">
              {log.hours ? t.hours(log.hours) : ""}
              {log.hours && log.words ? " · " : ""}
              {log.words ? t.words(log.words) : ""}
            </span>
          )}
        </span>
        <span aria-hidden>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="mt-3 grid gap-3 sm:grid-cols-[110px_130px_1fr]">
          <label className="block">
            <span className="text-xs text-muted">{t.actualHours}</span>
            <input
              type="number"
              min={0}
              step={0.25}
              inputMode="decimal"
              value={log.hours ?? ""}
              onChange={(e) => actions.setLog(key, { hours: e.target.value === "" ? undefined : Number(e.target.value) })}
              className="mt-1 w-full rounded-md border border-line bg-card px-2 py-1.5 tabular-nums"
            />
          </label>
          <label className="block">
            <span className="text-xs text-muted">{t.wordsWritten}</span>
            <input
              type="number"
              min={0}
              step={50}
              inputMode="numeric"
              value={log.words ?? ""}
              onChange={(e) => actions.setLog(key, { words: e.target.value === "" ? undefined : Number(e.target.value) })}
              className="mt-1 w-full rounded-md border border-line bg-card px-2 py-1.5 tabular-nums"
            />
          </label>
          <label className="block">
            <span className="text-xs text-muted">{t.logNote}</span>
            <input
              type="text"
              value={log.note ?? ""}
              onChange={(e) => actions.setLog(key, { note: e.target.value })}
              className="mt-1 w-full rounded-md border border-line bg-card px-2 py-1.5"
            />
          </label>
        </div>
      )}
    </footer>
  );
}
