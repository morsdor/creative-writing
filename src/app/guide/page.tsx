import type { Metadata } from "next";
import Link from "next/link";
import { QUARTERS, WEEKLY_BUDGET, WEEKLY_RHYTHM } from "@/data/curriculum";
import { CAT_BG, CAT_TEXT, Card, Eyebrow, H2, formatHours } from "@/components/ui";

export const metadata: Metadata = { title: "How it works" };

const OUTCOMES = [
  ["7", "short stories finished, several revised"],
  ["1", "novella (20–30k words) drafted and revised to Draft 3"],
  ["4", "Hindi stories, a check on your Hindi voice"],
  ["2", "stories submitted to literary magazines"],
  ["≈15", "novels and novellas read like a writer"],
  ["≈25", "English and Hindi short stories studied"],
];

const RULES = [
  { title: "Write from week one.", body: "You finish your first story in Month 1. It won't be good. That's the point: finishing is a skill, and it only grows by finishing." },
  { title: "Knowledge isn't ability.", body: "You can understand every idea in a craft book and still write a dull story. Writing gets 45% of the hours because writing is the only test." },
  { title: "Don't choose your identity too early.", body: "Literary, psychological, speculative, Hindi or English: let the answer come from your pages. Months 11–12 are built for that decision." },
  { title: "Big problems first.", body: "Structure before scenes, scenes before sentences. Never polish a paragraph in a scene you might cut." },
];

export default function GuidePage() {
  return (
    <div className="space-y-12">
      <header className="max-w-3xl space-y-4">
        <Eyebrow>How it works</Eyebrow>
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">One language, one craft, one finished book.</h1>
        <p className="text-lg leading-relaxed text-muted">
          For this year you learn the craft in English. Structure, character, point of view, scene and revision carry over to any language, so a year spent learning them in English is a year spent learning them, full stop. Hindi stays alive on the side with one hour a week of reading and one Hindi story per quarter. In Year 2 you can add Hindi properly and spend that effort only on what is specific to Hindi.
        </p>
      </header>

      <section className="space-y-4">
        <H2>By the end of the year</H2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {OUTCOMES.map(([n, text]) => (
            <div key={text} className="rounded-xl border border-line bg-card p-4">
              <p className="font-serif text-3xl font-semibold text-accent">{n}</p>
              <p className="mt-1 text-sm leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <H2>The 10-hour week</H2>
          <Card>
            <ul className="space-y-3.5">
              {WEEKLY_BUDGET.map((b) => (
                <li key={b.category} className="flex items-start gap-3">
                  <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${CAT_BG[b.category]}`} />
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className={`font-semibold ${CAT_TEXT[b.category]}`}>{b.label}</p>
                      <p className="tabular-nums text-sm">{formatHours(b.hours)}</p>
                    </div>
                    <p className="text-sm text-muted">{b.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex h-3 overflow-hidden rounded-full">
              {WEEKLY_BUDGET.map((b) => (
                <div key={b.category} className={CAT_BG[b.category]} style={{ width: `${b.hours * 10}%` }} title={`${b.label}: ${b.hours} h`} />
              ))}
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <H2>A suggested rhythm</H2>
          <Card className="p-0">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-line">
                {WEEKLY_RHYTHM.map((r) => (
                  <tr key={r.day}>
                    <th scope="row" className="w-28 px-5 py-3 font-semibold">{r.day}</th>
                    <td className="w-14 py-3 tabular-nums text-muted">{r.hours}</td>
                    <td className="py-3 pr-5">{r.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <p className="text-sm text-muted">Move days around to fit your job. What matters is that the long writing session happens every week.</p>
        </div>
      </section>

      <section className="space-y-4">
        <H2>Four quarters</H2>
        <ol className="grid gap-3 md:grid-cols-2">
          {QUARTERS.map((q) => (
            <li key={q.n} className="rounded-xl border border-line bg-card p-5">
              <Eyebrow>Q{q.n} · {q.months}</Eyebrow>
              <p className="mt-1 font-serif text-xl font-semibold">{q.title}</p>
              <p className="mt-2 leading-relaxed text-muted">{q.goal}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <H2>Four rules</H2>
        <div className="grid gap-3 md:grid-cols-2">
          {RULES.map((r) => (
            <Card key={r.title}>
              <p className="font-serif text-lg font-semibold">{r.title}</p>
              <p className="mt-1.5 leading-relaxed text-muted">{r.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card>
          <Eyebrow>When you fall behind</Eyebrow>
          <p className="mt-3 leading-relaxed">
            A year has 52 weeks and the plan uses 48, so you have <strong>four buffer weeks</strong>: illness, travel, deadlines at work. Don&apos;t catch up by doubling a week. Slide the plan.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            If a week is squeezed, cut in this order: lectures → craft reading → fiction reading. Never cut the Saturday writing session.
          </p>
        </Card>
        <Card>
          <Eyebrow>The Hindi hedge</Eyebrow>
          <p className="mt-3 leading-relaxed">
            Speaking Hindi and writing literary Hindi are different skills. One hour a week of Hindi fiction keeps your ear for written Hindi alive. The four Hindi stories (Months 3, 6, 10 and 12) check the one thing an English year can&apos;t tell you: whether your strongest voice is in Hindi.
          </p>
          <p className="mt-3 leading-relaxed text-muted">Write them natively. Don&apos;t translate from English.</p>
        </Card>
        <Card>
          <Eyebrow>Feedback</Eyebrow>
          <p className="mt-3 leading-relaxed">
            Line up two readers in Month 2. They read your best stories in Month 3 and your novella draft in Month 11.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Want more? Online critique groups such as Critique Circle or Scribophile, or one paid online course, like Gotham Writers Workshop&apos;s Fiction I, taken around Months 2–4. Any course should <em>replace</em> lecture and craft hours, not add to them.
          </p>
        </Card>
      </section>

      <section className="rounded-xl border border-line bg-sunken p-6">
        <p className="font-serif text-xl font-semibold">Where your progress lives</p>
        <p className="mt-2 max-w-3xl leading-relaxed text-muted">
          Ticks, logs and notes are saved in this browser&apos;s local storage. Nothing is sent anywhere. To move devices or keep a backup, use{" "}
          <Link href="/settings" className="text-ink underline underline-offset-2">Settings → Export</Link>, and import the file on the other device.
        </p>
      </section>
    </div>
  );
}
