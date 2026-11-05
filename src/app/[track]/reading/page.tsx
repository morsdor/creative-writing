import type { Metadata } from "next";
import { Suspense } from "react";
import { TRACK_IDS, getTrack } from "@/data/tracks";
import { ReadingList } from "@/components/ReadingList";
import { PageSkeleton, TrackGate } from "@/components/TrackGate";

export function generateStaticParams() {
  return TRACK_IDS.map((track) => ({ track }));
}

export async function generateMetadata({ params }: PageProps<"/[track]/reading">): Promise<Metadata> {
  const t = getTrack((await params).track);
  return { title: t ? `Reading · ${t.name}` : "Reading" };
}

export default function ReadingPage({ params }: PageProps<"/[track]/reading">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <TrackGate params={params}>{(track) => <ReadingList trackId={track} />}</TrackGate>
    </Suspense>
  );
}
