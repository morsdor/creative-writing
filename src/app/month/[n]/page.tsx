import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { MONTHS, getMonth } from "@/data/curriculum";
import { MonthView } from "@/components/MonthView";

export function generateStaticParams() {
  return MONTHS.map((m) => ({ n: String(m.n) }));
}

export async function generateMetadata({ params }: PageProps<"/month/[n]">): Promise<Metadata> {
  const { n } = await params;
  const month = getMonth(Number(n));
  return { title: month ? `Month ${month.n}: ${month.title}` : "Month" };
}

type Params = PageProps<"/month/[n]">["params"];

export default function MonthPage({ params }: PageProps<"/month/[n]">) {
  return (
    <Suspense fallback={<MonthSkeleton />}>
      <MonthContent params={params} />
    </Suspense>
  );
}

async function MonthContent({ params }: { params: Params }) {
  const { n } = await params;
  const month = getMonth(Number(n));
  if (!month) notFound();
  return <MonthView month={month} />;
}

function MonthSkeleton() {
  return (
    <div className="animate-pulse space-y-6" aria-busy="true" aria-label="Loading month">
      <div className="h-9 w-full max-w-md rounded-md bg-sunken" />
      <div className="h-4 w-48 rounded bg-sunken" />
      <div className="h-12 w-3/4 rounded-md bg-sunken" />
      <div className="h-6 w-2/3 rounded bg-sunken" />
      <div className="h-40 w-full rounded-xl bg-sunken" />
    </div>
  );
}
