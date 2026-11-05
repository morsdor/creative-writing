"use client";

import { useRef, useState } from "react";
import { actions, useTracker } from "@/lib/store";
import { calendarWeek } from "@/lib/progress";
import { Card, Eyebrow, H2 } from "@/components/ui";

export function SettingsView() {
  const { state } = useTracker();
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const calWeek = calendarWeek(state.startDate);

  function download() {
    const blob = new Blob([actions.exportJSON()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `fiction-year-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage("Backup downloaded.");
  }

  async function onImport(file: File) {
    try {
      actions.importJSON(await file.text());
      setMessage("Progress imported.");
    } catch {
      setMessage("That file couldn't be read. Is it a Fiction Year backup?");
    }
  }

  return (
    <div className="max-w-2xl space-y-8">
      <header className="space-y-3">
        <Eyebrow>Settings</Eyebrow>
        <h1 className="font-serif text-4xl font-semibold tracking-tight">Settings &amp; backup</h1>
      </header>

      {message && (
        <p role="status" className="rounded-lg bg-accent-soft px-4 py-2.5 text-sm">
          {message}
        </p>
      )}

      <Card className="space-y-3">
        <H2>Start date</H2>
        <p className="text-sm leading-relaxed text-muted">
          Used only to compare the calendar with your progress, so the dashboard can tell you whether you&apos;re on plan or using buffer weeks.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="date"
            value={state.startDate ?? ""}
            onChange={(e) => actions.setStartDate(e.target.value || null)}
            className="rounded-md border border-line bg-card px-3 py-2"
          />
          {calWeek !== null && <span className="text-sm text-muted">Calendar week {calWeek} of 52</span>}
        </div>
      </Card>

      <Card className="space-y-3">
        <H2>Backup &amp; move devices</H2>
        <p className="text-sm leading-relaxed text-muted">
          Progress is stored only in this browser. Export a backup now and then, and import it to continue on another device. Importing replaces what&apos;s here.
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

      <Card className="space-y-3">
        <H2>Reset</H2>
        <p className="text-sm leading-relaxed text-muted">Clears every tick, log entry, note and book status in this browser. Export first if you might want it back.</p>
        <button
          type="button"
          onClick={() => {
            if (window.confirm("Clear all progress in this browser? This can't be undone.")) {
              actions.reset();
              setMessage("All progress cleared.");
            }
          }}
          className="rounded-md border border-line bg-card px-4 py-2 text-sm text-cat-hindi hover:border-cat-hindi"
        >
          Reset all progress
        </button>
      </Card>
    </div>
  );
}
