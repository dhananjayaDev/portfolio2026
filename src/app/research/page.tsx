import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Shell } from "@/components/shell";
import { getProject } from "@/data/projects";
import { certifications, education, publication } from "@/data/research";

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "Conference research, education and certifications.",
};

export default function ResearchPage() {
  const related = getProject(publication.relatedSlug);

  return (
    <Shell>
      <PageHeader
        index="05"
        eyebrow="Record"
        title="Research & Education"
        lede="A conference paper, two degrees and the certifications that sit beside the engineering work."
      />

      <section className="border-b border-line px-6 py-12 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">Publication</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-medium tracking-[-0.03em] text-strong">{publication.title}</h2>
        <dl className="mt-6 space-y-2 text-sm text-muted">
          <div>{publication.venue}</div>
          <div>
            {publication.organization} · {publication.date}
          </div>
        </dl>
        {related ? (
          <Link href={`/projects/${related.slug}`} className="mt-6 inline-block font-mono text-[11px] tracking-[0.12em] uppercase hover:text-accent-ink">
            Related project · {related.title}
          </Link>
        ) : null}
      </section>

      <section className="border-b border-line px-6 py-12 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">Education</p>
        <div className="mt-6 divide-y divide-line border-t border-line">
          {education.map((item) => (
            <article key={item.title} className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <p className="font-mono text-sm text-muted">
                {item.period}
                {item.note ? ` · ${item.note}` : ""}
              </p>
              <div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-1 text-muted">{item.organization}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">Certifications</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {certifications.map((item) => (
            <li key={item} className="border border-line px-4 py-4">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </Shell>
  );
}
