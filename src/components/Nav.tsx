"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TRACKS, isTrackId } from "@/data/tracks";
import { UI } from "@/lib/i18n";

const SECTIONS = [
  { path: "", key: "dashboard" },
  { path: "/month/1", key: "months", match: "/month" },
  { path: "/guide", key: "guide" },
  { path: "/reading", key: "reading" },
  { path: "/log", key: "log" },
] as const;

function linkClass(active: boolean) {
  return `rounded-md px-2.5 py-1.5 transition-colors ${active ? "bg-ink text-paper" : "text-muted hover:bg-sunken hover:text-ink"}`;
}

export function Nav() {
  const path = usePathname();
  const [, first = "", ...rest] = path.split("/");
  const track = isTrackId(first) ? first : null;
  const sub = rest.length ? `/${rest.join("/")}` : "";
  const t = UI[track ?? "english"];

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {/* Track switch: keeps you on the same page in the other track */}
      <div role="group" aria-label="Track" className="flex rounded-lg border border-line bg-sunken p-0.5 text-sm">
        {TRACKS.map((t) => {
          const active = track === t.id;
          return (
            <Link
              key={t.id}
              href={`/${t.id}${track ? sub : ""}`}
              aria-current={active ? "page" : undefined}
              className={`rounded-md px-2.5 py-1 transition-colors ${active ? "bg-card font-medium text-ink shadow-sm" : "text-muted hover:text-ink"}`}
            >
              {t.id === "hindi" ? <span lang="hi">{t.nativeName}</span> : t.name}
            </Link>
          );
        })}
      </div>

      <nav className="-mx-1 flex flex-wrap gap-1 text-sm">
        {track &&
          SECTIONS.map((s) => {
            const active = "match" in s ? sub.startsWith(s.match) : sub === s.path;
            return (
              <Link key={s.key} href={`/${track}${s.path}`} className={linkClass(active)} lang={t.htmlLang}>
                {t.nav[s.key]}
              </Link>
            );
          })}
        <Link href="/settings" className={linkClass(path === "/settings")} lang={t.htmlLang}>
          {t.nav.settings}
        </Link>
      </nav>
    </div>
  );
}
