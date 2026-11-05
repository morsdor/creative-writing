"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { TrackId } from "@/lib/types";

/**
 * Progress lives in the browser's localStorage, one key per track, so the
 * English and Hindi tracks never share ticks, logs or notes.
 * Settings → Export saves both tracks in one file.
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

const KEYS: Record<TrackId, string> = {
  english: "fiction-year:english:v1",
  hindi: "fiction-year:hindi:v1",
};
const TRACK_LIST = Object.keys(KEYS) as TrackId[];

export const EMPTY_STATE: TrackerState = {
  version: 1,
  startDate: null,
  done: {},
  books: {},
  logs: {},
  notes: {},
};

const cache = new Map<TrackId, TrackerState>();
const listeners = new Map<TrackId, Set<() => void>>();

function normalise(raw: unknown): TrackerState {
  const r = (raw && typeof raw === "object" ? raw : {}) as Partial<TrackerState>;
  const obj = <T,>(v: unknown) => (v && typeof v === "object" ? (v as T) : ({} as T));
  return {
    version: 1,
    startDate: typeof r.startDate === "string" ? r.startDate : null,
    done: obj(r.done),
    books: obj(r.books),
    logs: obj(r.logs),
    notes: obj(r.notes),
  };
}

function read(track: TrackId): TrackerState {
  const hit = cache.get(track);
  if (hit) return hit;
  let state = EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(KEYS[track]);
    if (raw) state = normalise(JSON.parse(raw));
  } catch {
    /* blocked or corrupt storage — start empty */
  }
  cache.set(track, state);
  return state;
}

function write(track: TrackId, next: TrackerState) {
  cache.set(track, next);
  try {
    window.localStorage.setItem(KEYS[track], JSON.stringify(next));
  } catch {
    /* storage full or blocked — keep in memory */
  }
  listeners.get(track)?.forEach((l) => l());
}

function subscribe(track: TrackId, cb: () => void) {
  if (!listeners.has(track)) listeners.set(track, new Set());
  listeners.get(track)!.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEYS[track]) {
      cache.delete(track);
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.get(track)?.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

const noopSubscribe = () => () => {};
const serverSnapshot = () => EMPTY_STATE;

export function useTracker(track: TrackId) {
  const sub = useCallback((cb: () => void) => subscribe(track, cb), [track]);
  const snap = useCallback(() => read(track), [track]);
  const state = useSyncExternalStore(sub, snap, serverSnapshot);
  const hydrated = useSyncExternalStore(noopSubscribe, () => true, () => false);
  return { state, hydrated };
}

/* ------------------------------ actions ------------------------------ */

export function trackActions(track: TrackId) {
  const update = (fn: (s: TrackerState) => TrackerState) => write(track, fn(read(track)));
  return {
    toggle(id: string) {
      update((s) => {
        const done = { ...s.done };
        if (done[id]) delete done[id];
        else done[id] = true;
        return { ...s, done };
      });
    },
    setMany(ids: string[], value: boolean) {
      update((s) => {
        const done = { ...s.done };
        for (const id of ids) {
          if (value) done[id] = true;
          else delete done[id];
        }
        return { ...s, done };
      });
    },
    setBook(id: string, status: BookStatus) {
      update((s) => ({ ...s, books: { ...s.books, [id]: status } }));
    },
    setLog(key: string, patch: WeekLog) {
      update((s) => ({ ...s, logs: { ...s.logs, [key]: { ...s.logs[key], ...patch } } }));
    },
    setNote(month: number, text: string) {
      update((s) => ({ ...s, notes: { ...s.notes, [String(month)]: text } }));
    },
    setStartDate(date: string | null) {
      update((s) => ({ ...s, startDate: date }));
    },
    reset() {
      write(track, EMPTY_STATE);
    },
  };
}

/* --------------------------- backup (both tracks) --------------------------- */

export function exportAll(): string {
  const tracks = Object.fromEntries(TRACK_LIST.map((t) => [t, read(t)]));
  return JSON.stringify({ app: "fiction-year", version: 2, tracks }, null, 2);
}

/** Accepts a v2 backup (both tracks). Returns the tracks it restored. */
export function importAll(text: string): TrackId[] {
  const data = JSON.parse(text) as { version?: number; tracks?: Record<string, unknown> };
  if (data?.version !== 2 || !data.tracks || typeof data.tracks !== "object") {
    throw new Error("Not a Fiction Year backup");
  }
  const restored: TrackId[] = [];
  for (const t of TRACK_LIST) {
    if (t in data.tracks) {
      write(t, normalise(data.tracks[t]));
      restored.push(t);
    }
  }
  return restored;
}
