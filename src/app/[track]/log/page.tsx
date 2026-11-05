import type { Metadata } from "next";
import { Suspense } from "react";
import { TRACK_IDS, getTrack } from "@/data/tracks";
import { LogView } from "@/components/LogView";
import { PageSkeleton, TrackGate } from "@/components/TrackGate";

export function generateStaticParams() {
  return TRACK_IDS.map((track) => ({ track }));
}

export async function generateMetadata({ params }: PageProps<"/[track]/log">): Promise<Metadata> {
  const t = getTrack((await params).track);
  return { title: t ? `Log · ${t.name}` : "Log" };
}

export default function LogPage({ params }: PageProps<"/[track]/log">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <TrackGate params={params}>{(track) => <LogView trackId={track} />}</TrackGate>
    </Suspense>
  );
}
