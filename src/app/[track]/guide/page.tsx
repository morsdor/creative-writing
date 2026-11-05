import type { Metadata } from "next";
import { Suspense } from "react";
import { TRACK_IDS, getTrack } from "@/data/tracks";
import { ui } from "@/lib/i18n";
import { GuideView } from "@/components/GuideView";
import { PageSkeleton, TrackGate } from "@/components/TrackGate";

export function generateStaticParams() {
  return TRACK_IDS.map((track) => ({ track }));
}

export async function generateMetadata({ params }: PageProps<"/[track]/guide">): Promise<Metadata> {
  const t = getTrack((await params).track);
  return { title: t ? `${ui(t.id).nav.guide} · ${t.nativeName}` : "How it works" };
}

export default function GuidePage({ params }: PageProps<"/[track]/guide">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <TrackGate params={params}>{(track) => <GuideView trackId={track} />}</TrackGate>
    </Suspense>
  );
}
