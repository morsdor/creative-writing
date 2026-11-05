import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { TRACKS, getMonth, getTrack } from "@/data/tracks";
import { ui } from "@/lib/i18n";
import { MonthView } from "@/components/MonthView";
import { PageSkeleton } from "@/components/TrackGate";

export function generateStaticParams() {
  return TRACKS.flatMap((t) => t.months.map((m) => ({ track: t.id, n: String(m.n) })));
}

export async function generateMetadata({ params }: PageProps<"/[track]/month/[n]">): Promise<Metadata> {
  const { track, n } = await params;
  const t = getTrack(track);
  const m = t && getMonth(t, Number(n));
  return { title: t && m ? `${ui(t.id).monthN(m.n)}: ${m.title} · ${t.nativeName}` : "Month" };
}

type Params = PageProps<"/[track]/month/[n]">["params"];

export default function MonthPage({ params }: PageProps<"/[track]/month/[n]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <MonthContent params={params} />
    </Suspense>
  );
}

async function MonthContent({ params }: { params: Params }) {
  const { track, n } = await params;
  const t = getTrack(track);
  if (!t || !getMonth(t, Number(n))) notFound();
  return <MonthView trackId={t.id} n={Number(n)} />;
}
