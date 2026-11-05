"use client";

import { useRef, useState } from "react";
import type { Track } from "@/lib/types";
import { TRACKS } from "@/data/tracks";
import { exportAll, importAll, trackActions, useTracker } from "@/lib/store";
import { calendarWeek } from "@/lib/progress";
import { Card, Eyebrow, H2 } from "@/components/ui";

export function SettingsView() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  function download() {
    const blob = new Blob([exportAll()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fiction-year-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage("Backup of both tracks downloaded.");
  }

  async function onImport(file: File) {
    try {
      const restored = importAll(await file.text());
      const names = restored.map((t) => TRACKS.find((x) => x.id === t)?.name).join(" and ");
      setMessage(`Imported the ${names} track${restored.length > 1 ? "s" : ""}.`);
    } catch {
      setMessage("That file couldn't be read. Is it a Fiction Year backup?");
    }
  }

  return (
    <div className="max-w-2xl space-y-8">
      <header className="space-y-3">
        <Eyebrow>Settings</Eyebrow>
        <h1 className="font-serif text-4xl font-semibold tracking-tight">Settings &amp; backup</h1>
        <p className="leading-relaxed text-muted">Each track keeps its own progress, start date and notes.</p>
      </header>

      {message && (
        <p role="status" className="rounded-lg bg-accent-soft px-4 py-2.5 text-sm">
          {message}
        </p>
      )}

      {TRACKS.map((t) => (
        <TrackSettings key={t.id} track={t} onMessage={setMessage} />
      ))}

      <Card className="space-y-3">
        <H2>Backup &amp; move devices</H2>
        <p className="text-sm leading-relaxed text-muted">
          Progress is stored only in this browser. The backup file holds both tracks. Import it on another device to continue there. Importing replaces what&apos;s here.
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={download} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-ink hover:opacity-90">
            Export backup (.json)
          </button>
          <button type="button" onClick={() => fileRef.current?.click()} className="rounded-md border border-line bg-card px-4 py-2 text-sm hover:border-muted">
            Import backup…
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onImport(f);
              e.target.value = "";
            }}
          />
        </div>
      </Card>
    </div>
  );
}

function TrackSettings({ track, onMessage }: { track: Track; onMessage: (m: string) => void }) {
  const { state } = useTracker(track.id);
  const actions = trackActions(track.id);
  const calWeek = calendarWeek(state.startDate);
  const ticked = Object.keys(state.done).length;

  return (
    <Card className="space-y-4">
      <div className="flex items-baseline justify-between gap-3">
        <H2>{track.name} track</H2>
        <span className="text-sm text-muted tabular-nums">{ticked} items ticked</span>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Start date</p>
        <p className="text-sm leading-relaxed text-muted">
          Used only to compare the calendar with your progress, so the dashboard can tell you whether you&apos;re on plan or using buffer weeks.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="date"
            aria-label={`${track.name} track start date`}
            value={state.startDate ?? ""}
            onChange={(e) => actions.setStartDate(e.target.value || null)}
            className="rounded-md border border-line bg-card px-3 py-2"
          />
          {calWeek !== null && <span className="text-sm text-muted">Calendar week {calWeek} of 52</span>}
        </div>
      </div>
      <div className="border-t border-line pt-4">
        <button
          type="button"
          onClick={() => {
            if (window.confirm(`Clear all ${track.name} track progress in this browser? This can't be undone.`)) {
              actions.reset();
              onMessage(`${track.name} track progress cleared.`);
            }
          }}
          className="rounded-md border border-line bg-card px-4 py-2 text-sm text-cat-language hover:border-cat-language"
        >
          Reset {track.name} track
        </button>
      </div>
    </Card>
  );
}
