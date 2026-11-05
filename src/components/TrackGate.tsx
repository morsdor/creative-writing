import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isTrackId } from "@/data/tracks";
import type { TrackId } from "@/lib/types";

/**
 * Awaits the [track] param (must be rendered inside <Suspense>) and hands the
 * validated track id to its render function. Unknown tracks 404.
 */
export async function TrackGate({ params, children }: { params: Promise<{ track: string }>; children: (track: TrackId) => ReactNode }) {
  const { track } = await params;
  if (!isTrackId(track)) notFound();
  return <>{children(track)}</>;
}

export function PageSkeleton() {
  return (
    <div className="animate-pulse space-y-6" aria-busy="true" aria-label="Loading">
      <div className="h-4 w-48 rounded bg-sunken" />
      <div className="h-12 w-3/4 rounded-md bg-sunken" />
      <div className="h-6 w-2/3 rounded bg-sunken" />
      <div className="h-40 w-full rounded-xl bg-sunken" />
    </div>
  );
}
