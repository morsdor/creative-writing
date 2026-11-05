import Link from "next/link";
import type { TrackId } from "@/lib/types";
import { getTrack } from "@/data/tracks";
import { CAT_BG, CAT_TEXT, Card, Eyebrow, H2 } from "@/components/ui";
import { ui } from "@/lib/i18n";

export function GuideView({ trackId }: { trackId: TrackId }) {
  const track = getTrack(trackId);
  const g = track.guide;
  const t = ui(trackId);

  return (
    <div className="space-y-12" lang={t.htmlLang}>
      <header className="max-w-3xl space-y-4">
        <Eyebrow>{t.guideEyebrow}</Eyebrow>
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {g.headline}
        </h1>
        <p className="text-lg leading-relaxed text-muted">{g.intro}</p>
      </header>

      <section className="space-y-4">
        <H2>{t.byEndOfYear}</H2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {g.outcomes.map(([n, text]) => (
            <div key={text} className="rounded-xl border border-line bg-card p-4">
              <p className="font-serif text-3xl font-semibold text-accent">{n}</p>
              <p className="mt-1 text-sm leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <H2>{t.tenHourWeek}</H2>
          <Card>
            <ul className="space-y-3.5">
              {track.budget.map((b) => (
                <li key={b.category} className="flex items-start gap-3">
                  <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${CAT_BG[b.category]}`} />
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className={`font-semibold ${CAT_TEXT[b.category]}`}>{b.label}</p>
                      <p className="tabular-nums text-sm">{t.hours(b.hours)}</p>
                    </div>
                    <p className="text-sm text-muted">{b.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex h-3 overflow-hidden rounded-full">
              {track.budget.map((b) => (
                <div key={b.category} className={CAT_BG[b.category]} style={{ width: `${b.hours * 10}%` }} title={`${b.label}: ${b.hours} h`} />
              ))}
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <H2>{t.rhythm}</H2>
          <Card className="p-0">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-line">
                {track.rhythm.map((r) => (
                  <tr key={r.day}>
                    <th scope="row" className="w-28 px-5 py-3 font-semibold">{r.day}</th>
                    <td className="w-14 py-3 tabular-nums text-muted">{r.hours}</td>
                    <td className="py-3 pr-5">{r.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <p className="text-sm text-muted">{t.rhythmNote}</p>
        </div>
      </section>

      <section className="space-y-4">
        <H2>{t.fourQuarters}</H2>
        <ol className="grid gap-3 md:grid-cols-2">
          {track.quarters.map((q) => (
            <li key={q.n} className="rounded-xl border border-line bg-card p-5">
              <Eyebrow>{t.quarterShort(q.n)} · {q.months}</Eyebrow>
              <p className="mt-1 font-serif text-xl font-semibold">{q.title}</p>
              <p className="mt-2 leading-relaxed text-muted">{q.goal}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <H2>{t.fourRules}</H2>
        <div className="grid gap-3 md:grid-cols-2">
          {g.rules.map((r) => (
            <Card key={r.title}>
              <p className="font-serif text-lg font-semibold">{r.title}</p>
              <p className="mt-1.5 leading-relaxed text-muted">{r.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card>
          <Eyebrow>{t.fallBehind}</Eyebrow>
          <p className="mt-3 leading-relaxed">{t.fallBehindBody}</p>
          <p className="mt-3 leading-relaxed text-muted">{t.fallBehindSub}</p>
        </Card>
        {g.cards.map((c) => (
          <Card key={c.eyebrow}>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <p className="mt-3 leading-relaxed">{c.body}</p>
            {c.sub && <p className="mt-3 leading-relaxed text-muted">{c.sub}</p>}
          </Card>
        ))}
      </section>

      <section className="rounded-xl border border-line bg-sunken p-6">
        <p className="font-serif text-xl font-semibold">{t.progressLives}</p>
        <p className="mt-2 max-w-3xl leading-relaxed text-muted">
          {t.progressLivesBody}{" "}
          <Link href="/settings" className="text-ink underline underline-offset-2">Settings →</Link>
        </p>
      </section>
    </div>
  );
}
