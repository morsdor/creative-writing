"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/month/1", label: "Months", match: "/month" },
  { href: "/guide", label: "How it works" },
  { href: "/reading", label: "Reading" },
  { href: "/log", label: "Log" },
  { href: "/settings", label: "Settings" },
];

export function Nav() {
  const path = usePathname();
  return (
    <nav className="-mx-1 flex flex-wrap gap-1 text-sm">
      {LINKS.map((l) => {
        const active = l.match ? path.startsWith(l.match) : path === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`rounded-md px-2.5 py-1.5 transition-colors ${
              active ? "bg-ink text-paper" : "text-muted hover:bg-sunken hover:text-ink"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
