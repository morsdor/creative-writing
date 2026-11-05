"use client";

import Link from "next/link";
import type { TrackId } from "@/lib/types";
import { getTrack } from "@/data/tracks";
import { trackActions, useTracker } from "@/lib/store";
import { logKey, logTotals, weekProgress } from "@/lib/progress";
import { Card, Eyebrow, H2, ProgressBar } from "@/components/ui";
import { ui } from "@/lib/i18n";

export function LogView({ trackId }: { trackId: TrackId }) {
  const track = getTrack(trackId);
  const MONTHS = track.months;
  const { state } = useTracker(trackId);
  const actions = trackActions(trackId);
  const totals = logTotals(state);
  const rows = MONTHS.flatMap((m) => m.weeks.map((w, i) => ({ m, w, index: (m.n - 1) * 4 + i + 1 })));
  const maxWords = Math.max(2500, ...rows.map((r) => state.logs[logKey(r.m.n, r.w.n)]?.words ?? 0));
  const avgHours = totals.weeksLogged ? totals.hours / totals.weeksLogged : 0;
  const t = ui(trackId);

  return (
    <div className="space-y-10" lang={t.htmlLang}>
      <header className="max-w-3xl space-y-3">
        <Eyebrow>{t.logEyebrow}</Eyebrow>
        <h1 className="font-serif text-4xl font-semibold tracking-tight">{t.logTitle}</h1>
        <p className="leading-relaxed text-muted">{t.logIntro}</p>
      </header>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label={t.wordsWritten} value={t.num(totals.words)} />
        <Stat label={t.hoursLogged} value={`${Math.round(totals.hours * 10) / 10}`} />
        <Stat label={t.weeksLoggedLabel} value={`${totals.weeksLogged} / 48`} />
        <Stat label={t.avgHours} value={avgHours ? avgHours.toFixed(1) : "—"} />
      </section>

      <section className="space-y-4">
        <H2>{t.wordsPerWeek}</H2>
        <Card>
          <div className="flex h-40 items-end gap-[3px]" role="img" aria-label={t.chartLabel}>
            {rows.map(({ m, w, index }) => {
              const words = state.logs[logKey(m.n, w.n)]?.words ?? 0;
              return (
                <div key={index} className="group relative flex h-full flex-1 items-end" title={`${t.weekShort(m.n, w.n)}: ${t.words(words)}`}>
                  <div
                    className={`w-full rounded-t-sm ${m.quarter === 3 ? "bg-accent" : "bg-ink/70"}`}
                    style={{ height: `${(words / maxWords) * 100}%`, minHeight: words ? 2 : 0 }}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-2 grid grid-cols-12 text-center text-[10px] tabular-nums text-muted">
            {MONTHS.map((m) => (
              <span key={m.n}>{t.monthShort(m.n)}</span>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">{t.chartNote}</p>
        </Card>
      </section>

      <section className="space-y-4">
        <H2>{t.allWeeks}</H2>
        <div className="overflow-x-auto rounded-xl border border-line bg-card">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-line text-xs text-muted">
              <tr>
                <th className="px-4 py-2.5 font-medium">{t.colWeek}</th>
                <th className="px-2 py-2.5 font-medium">{t.colFocus}</th>
                <th className="w-28 px-2 py-2.5 font-medium">{t.colPlan}</th>
                <th className="w-20 px-2 py-2.5 font-medium">{t.colHours}</th>
                <th className="w-24 px-2 py-2.5 font-medium">{t.colWords}</th>
                <th className="px-2 py-2.5 pr-4 font-medium">{t.colNote}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map(({ m, w, index }) => {
                const key = logKey(m.n, w.n);
                const log = state.logs[key] ?? {};
                const p = weekProgress(state, w);
                return (
                  <tr key={key} className={w.n === 1 ? "border-t-2 border-t-line" : ""}>
                    <td className="whitespace-nowrap px-4 py-2 tabular-nums">
                      <Link href={`/${trackId}/month/${m.n}#week-${w.n}`} className="hover:text-accent">
                        <span className="text-muted">{index}.</span> {t.weekShort(m.n, w.n)}
                      </Link>
                    </td>
                    <td className="max-w-[220px] truncate px-2 py-2" title={w.focus}>{w.focus}</td>
                    <td className="px-2 py-2">
                      <ProgressBar pct={p.pct} />
                    </td>
                    <td className="px-2 py-1.5">
                      <input
                        type="number"
                        min={0}
                        step={0.25}
                        aria-label={`Hours, month ${m.n} week ${w.n}`}
                        value={log.hours ?? ""}
                        onChange={(e) => actions.setLog(key, { hours: e.target.value === "" ? undefined : Number(e.target.value) })}
                        className="w-full rounded border border-transparent bg-transparent px-1.5 py-1 tabular-nums hover:border-line focus:border-muted focus:bg-card"
                      />
                    </td>
                    <td className="px-2 py-1.5">
                      <input
                        type="number"
                        min={0}
                        step={50}
                        aria-label={`Words, month ${m.n} week ${w.n}`}
                        value={log.words ?? ""}
                        onChange={(e) => actions.setLog(key, { words: e.target.value === "" ? undefined : Number(e.target.value) })}
                        className="w-full rounded border border-transparent bg-transparent px-1.5 py-1 tabular-nums hover:border-line focus:border-muted focus:bg-card"
                      />
                    </td>
                    <td className="px-2 py-1.5 pr-4">
                      <input
                        type="text"
                        aria-label={`Note, month ${m.n} week ${w.n}`}
                        value={log.note ?? ""}
                        onChange={(e) => actions.setLog(key, { note: e.target.value })}
                        className="w-full rounded border border-transparent bg-transparent px-1.5 py-1 hover:border-line focus:border-muted focus:bg-card"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-card p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-serif text-2xl font-semibold tabular-nums">{value}</p>
    </div>
  );
}
