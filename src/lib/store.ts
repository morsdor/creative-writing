"use client";

import { useSyncExternalStore } from "react";

/**
 * All progress lives in the browser's localStorage under one key.
 * Use Settings → Export to back it up or move it to another device.
 */

export type BookStatus = "todo" | "have" | "reading" | "done";

export interface WeekLog {
  hours?: number;
  words?: number;
  note?: string;
}

export interface TrackerState {
  version: 1;
  startDate: string | null;
  /** task + deliverable ids that are complete */
  done: Record<string, true>;
  books: Record<string, BookStatus>;
  /** keyed "m{month}w{week}" */
  logs: Record<string, WeekLog>;
  /** keyed by month number */
  notes: Record<string, string>;
}

const KEY = "fiction-year:v1";

export const EMPTY_STATE: TrackerState = {
  version: 1,
  startDate: null,
  done: {},
  books: {},
  logs: {},
  notes: {},
};

let cache: TrackerState | null = null;
const listeners = new Set<() => void>();

function normalise(raw: unknown): TrackerState {
  const r = (raw && typeof raw === "object" ? raw : {}) as Partial<TrackerState>;
  return {
    version: 1,
    startDate: typeof r.startDate === "string" ? r.startDate : null,
    done: r.done && typeof r.done === "object" ? r.done : {},
    books: r.books && typeof r.books === "object" ? r.books : {},
    logs: r.logs && typeof r.logs === "object" ? r.logs : {},
    notes: r.notes && typeof r.notes === "object" ? r.notes : {},
  };
}

function read(): TrackerState {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    cache = raw ? normalise(JSON.parse(raw)) : EMPTY_STATE;
  } catch {
    cache = EMPTY_STATE;
  }
  return cache;
}

function write(next: TrackerState) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage full or blocked — keep in memory */
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

const noopSubscribe = () => () => {};

export function useTracker() {
  const state = useSyncExternalStore(subscribe, read, () => EMPTY_STATE);
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);
  return { state, hydrated };
}

/* ------------------------------ actions ------------------------------ */

export const actions = {
  toggle(id: string) {
    const s = read();
    const done = { ...s.done };
    if (done[id]) delete done[id];
    else done[id] = true;
    write({ ...s, done });
  },
  setMany(ids: string[], value: boolean) {
    const s = read();
    const done = { ...s.done };
    for (const id of ids) {
      if (value) done[id] = true;
      else delete done[id];
    }
    write({ ...s, done });
  },
  setBook(id: string, status: BookStatus) {
    const s = read();
    write({ ...s, books: { ...s.books, [id]: status } });
  },
  setLog(key: string, patch: WeekLog) {
    const s = read();
    write({ ...s, logs: { ...s.logs, [key]: { ...s.logs[key], ...patch } } });
  },
  setNote(month: number, text: string) {
    const s = read();
    write({ ...s, notes: { ...s.notes, [String(month)]: text } });
  },
  setStartDate(date: string | null) {
    write({ ...read(), startDate: date });
  },
  exportJSON(): string {
    return JSON.stringify(read(), null, 2);
  },
  importJSON(text: string) {
    write(normalise(JSON.parse(text)));
  },
  reset() {
    write(EMPTY_STATE);
  },
};
