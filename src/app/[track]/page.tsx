import type { Metadata } from "next";
import { Suspense } from "react";
import { TRACK_IDS, getTrack } from "@/data/tracks";
import { Dashboard } from "@/components/Dashboard";
import { PageSkeleton, TrackGate } from "@/components/TrackGate";

export function generateStaticParams() {
  return TRACK_IDS.map((track) => ({ track }));
}

export async function generateMetadata({ params }: PageProps<"/[track]">): Promise<Metadata> {
  const t = getTrack((await params).track);
  return { title: t ? `${t.name} track` : "Track" };
}

export default function TrackHome({ params }: PageProps<"/[track]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <TrackGate params={params}>{(track) => <Dashboard trackId={track} />}</TrackGate>
    </Suspense>
  );
}
