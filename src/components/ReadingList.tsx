"use client";

import Link from "next/link";
import { getTrack } from "@/data/tracks";
import type { Book, TrackId } from "@/lib/types";
import { trackActions, useTracker, type BookStatus } from "@/lib/store";
import { Card, Eyebrow, H2 } from "@/components/ui";

const STATUSES: { value: BookStatus; label: string }[] = [
  { value: "todo", label: "To get" },
  { value: "have", label: "Have it" },
  { value: "reading", label: "Reading" },
  { value: "done", label: "Done" },
];

export const PRIORITY_LABEL: Record<Book["priority"], string> = {
  "buy-first": "Buy first",
  "buy-later": "Buy during the year",
  optional: "Optional",
  "free-online": "Free online",
};

const PRIORITY_STYLE: Record<Book["priority"], string> = {
  "buy-first": "bg-accent text-accent-ink",
  "buy-later": "bg-sunken text-ink",
  optional: "border border-line text-muted",
  "free-online": "bg-cat-fiction/15 text-cat-fiction",
};

export function ReadingList({ trackId }: { trackId: TrackId }) {
  const track = getTrack(trackId);
  const BOOKS = track.books;
  const { state } = useTracker(trackId);
  const actions = trackActions(trackId);
  const statusOf = (id: string): BookStatus => state.books[id] ?? "todo";
  const done = BOOKS.filter((b) => statusOf(b.id) === "done").length;
  const buyFirst = BOOKS.filter((b) => b.priority === "buy-first");

  return (
    <div className="space-y-10">
      <header className="max-w-3xl space-y-3">
        <Eyebrow>Reading list · {track.name} track</Eyebrow>
        <h1 className="font-serif text-4xl font-semibold tracking-tight">Every book, by when you need it</h1>
        <p className="leading-relaxed text-muted">
          {done} of {BOOKS.length} finished. You don&apos;t need to buy everything now. Start with the {buyFirst.length} marked <em>Buy first</em>, and use free online texts where they exist.
        </p>
      </header>

      <Card>
        <Eyebrow>Buy first</Eyebrow>
        <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
          {buyFirst.map((b) => (
            <li key={b.id} className="flex items-baseline gap-2">
              <span className={statusOf(b.id) === "todo" ? "text-muted" : "text-accent"}>{statusOf(b.id) === "todo" ? "○" : "●"}</span>
              <span className="font-serif">{b.title}</span>
              <span className="text-sm text-muted">— {b.author}</span>
            </li>
          ))}
        </ul>
      </Card>

      {track.bookGroups.map((g) => (
        <section key={g.kind} className="space-y-4">
          <div>
            <H2>{g.title}</H2>
            <p className="mt-1 text-sm text-muted">{g.blurb}</p>
          </div>
          <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-card">
            {BOOKS.filter((b) => b.kind === g.kind).map((b) => {
              const s = statusOf(b.id);
              return (
                <li key={b.id} className="grid gap-3 p-4 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className={`font-serif text-lg leading-snug ${s === "done" ? "text-muted" : ""}`}>
                        {b.url ? (
                          <a href={b.url} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-accent">
                            {b.title}
                          </a>
                        ) : (
                          b.title
                        )}
                      </p>
                      <span className={`rounded px-1.5 py-0.5 text-[11px] font-medium ${PRIORITY_STYLE[b.priority]}`}>{PRIORITY_LABEL[b.priority]}</span>
                    </div>
                    <p className="text-sm text-muted">
                      {b.author} · {b.length} ·{" "}
                      {b.months.map((m, i) => (
                        <span key={m}>
                          {i > 0 && ", "}
                          <Link href={`/${trackId}/month/${m}`} className="underline underline-offset-2 hover:text-ink">M{m}</Link>
                        </span>
                      ))}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed">{b.note}</p>
                  </div>
                  <div role="radiogroup" aria-label={`Status of ${b.title}`} className="flex shrink-0 rounded-lg border border-line bg-sunken p-0.5 text-xs">
                    {STATUSES.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        role="radio"
                        aria-checked={s === opt.value}
                        onClick={() => actions.setBook(b.id, opt.value)}
                        className={`rounded-md px-2.5 py-1.5 transition-colors ${s === opt.value ? "bg-card font-medium text-ink shadow-sm" : "text-muted hover:text-ink"}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
