import type { ReactNode } from "react";
import type { Category, Resource } from "@/lib/types";

export const CAT_TEXT: Record<Category, string> = {
  writing: "text-cat-writing",
  fiction: "text-cat-fiction",
  craft: "text-cat-craft",
  lecture: "text-cat-lecture",
  language: "text-cat-language",
  reflect: "text-cat-reflect",
};

export const CAT_BG: Record<Category, string> = {
  writing: "bg-cat-writing",
  fiction: "bg-cat-fiction",
  craft: "bg-cat-craft",
  lecture: "bg-cat-lecture",
  language: "bg-cat-language",
  reflect: "bg-cat-reflect",
};

export function CategoryBadge({ category, label }: { category: Category; label: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider ${CAT_TEXT[category]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${CAT_BG[category]}`} />
      {label}
    </span>
  );
}

export function ProgressBar({ pct, className = "", tone = "accent" }: { pct: number; className?: string; tone?: "accent" | "ink" }) {
  return (
    <div className={`h-1.5 w-full overflow-hidden rounded-full bg-sunken ${className}`} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div
        className={`h-full rounded-full transition-[width] duration-500 ${tone === "accent" ? "bg-accent" : "bg-ink"}`}
        style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
      />
    </div>
  );
}

export function Card({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`rounded-xl border border-line bg-card p-5 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{children}</p>;
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="font-serif text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
        checked ? "border-accent bg-accent text-accent-ink" : "border-line bg-card hover:border-muted"
      }`}
    >
      {checked && (
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3.5 8.5l3 3 6-7" />
        </svg>
      )}
    </button>
  );
}

export function ResourceList({ items, readLabel = "Read/watch: " }: { items: Resource[]; readLabel?: string }) {
  return (
    <ul className="space-y-4">
      {items.map((r, i) => (
        <li key={i}>
          <p className="font-serif text-[17px] leading-snug">
            {r.url ? (
              <a href={r.url} target="_blank" rel="noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-accent">
                {r.title}
              </a>
            ) : (
              r.title
            )}
            {r.author && <span className="text-muted"> — {r.author}</span>}
          </p>
          <p className="mt-1 text-sm"><span className="text-muted">{readLabel}</span>{r.what}</p>
          <p className="mt-0.5 text-sm text-muted">{r.why}</p>
        </li>
      ))}
    </ul>
  );
}

export function ProgressRing({ pct, size = 112 }: { pct: number; size?: number }) {
  const stroke = 9;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${pct}% complete`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--sunken)" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct / 100)}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 600ms ease" }}
      />
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="var(--ink)" className="font-serif" fontSize={size * 0.24} fontWeight={600}>
        {pct}%
      </text>
    </svg>
  );
}

export function formatHours(h: number) {
  if (h === 0) return "0 h";
  if (h < 1) return `${Math.round(h * 60)} min`;
  return `${Number.isInteger(h) ? h : h.toFixed(h * 4 === Math.round(h * 4) ? 2 : 1).replace(/0$/, "")} h`;
}
