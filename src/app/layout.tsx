import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fiction Year",
    template: "%s · Fiction Year",
  },
  description: "A 12-month, 10-hours-a-week fiction-writing curriculum and progress tracker.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#15130f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <header className="z-30 border-b border-line bg-paper/90 backdrop-blur sm:sticky sm:top-0">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-semibold tracking-tight">Fiction Year</span>
              <span className="hidden text-xs text-muted sm:inline">English · हिंदी · 10 h/week</span>
            </Link>
            <Nav />
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-muted">
            Progress is saved in this browser. Back it up from Settings → Export.
          </div>
        </footer>
      </body>
    </html>
  );
}
