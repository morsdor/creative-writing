import type { Metadata } from "next";
import { ReadingList } from "@/components/ReadingList";

export const metadata: Metadata = { title: "Reading list" };

export default function ReadingPage() {
  return <ReadingList />;
}
