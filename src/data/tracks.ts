import type { Month, Track, TrackId } from "../lib/types.ts";
import { ENGLISH } from "./english/index.ts";
import { HINDI } from "./hindi/index.ts";

export { CATEGORY_LABEL, weekHours } from "./helpers.ts";

export const TRACKS: Track[] = [ENGLISH, HINDI];
export const TRACK_IDS: TrackId[] = TRACKS.map((t) => t.id);

export function isTrackId(id: string): id is TrackId {
  return (TRACK_IDS as string[]).includes(id);
}

export function getTrack(id: TrackId): Track;
export function getTrack(id: string): Track | undefined;
export function getTrack(id: string): Track | undefined {
  return TRACKS.find((t) => t.id === id);
}

export function getMonth(track: Track, n: number): Month | undefined {
  return track.months.find((m) => m.n === n);
}
