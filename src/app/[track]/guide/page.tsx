import type { Metadata } from "next";
import { Suspense } from "react";
import { TRACK_IDS, getTrack } from "@/data/tracks";
import { GuideView } from "@/components/GuideView";
import { PageSkeleton, TrackGate } from "@/components/TrackGate";

export function generateStaticParams() {
  return TRACK_IDS.map((track) => ({ track }));
}

export async function generateMetadata({ params }: PageProps<"/[track]/guide">): Promise<Metadata> {
  const t = getTrack((await params).track);
  return { title: t ? `How it works · ${t.name}` : "How it works" };
}

export default function GuidePage({ params }: PageProps<"/[track]/guide">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <TrackGate params={params}>{(track) => <GuideView trackId={track} />}</TrackGate>
    </Suspense>
  );
}
