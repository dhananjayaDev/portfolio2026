import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { Shell } from "@/components/shell";
import { roles } from "@/data/experience";
import { skillGroups } from "@/data/expertise";
import { getFeaturedProjects } from "@/data/projects";
import { certifications, education, publication } from "@/data/research";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae for ${site.name}.`,
};

export default function CvPage() {
  const featured = getFeaturedProjects();

  return (
    <Shell className="py-12">
      <article className="bg-white p-6 text-[#17191d] sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-[#d65a31] uppercase">Curriculum vitae</p>
            <h1 className="mt-2 font-display text-5xl font-semibold tracking-[-0.03em]">{site.name}</h1>
            <p className="mt-2 text-lg">{site.tagline}</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5c6370]">{site.positioning}</p>
          </div>
          <PrintButton />
        </div>
        <p className="mt-6 text-sm">
          {site.email} · {site.location}
        </p>

        <CvSection title="Experience">
          {roles.map((role) => (
            <div key={`${role.position}-${role.period}`} className="mt-4">
              <p className="font-medium">
                {role.position} · {role.organization}
              </p>
              <p className="text-sm text-[#5c6370]">{role.period}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                {role.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </CvSection>

        <CvSection title="Featured projects">
          <ul className="mt-4 space-y-2 text-sm leading-6">
            {featured.map((project) => (
              <li key={project.slug}>
                <span className="font-medium">{project.title}.</span> {project.summary}
              </li>
            ))}
          </ul>
        </CvSection>

        <CvSection title="Education">
          {education.map((item) => (
            <p key={item.title} className="mt-3 text-sm leading-6">
              <span className="font-medium">{item.title}</span> · {item.organization} · {item.period}
              {item.note ? ` · ${item.note}` : ""}
            </p>
          ))}
        </CvSection>

        <CvSection title="Research">
          <p className="mt-3 text-sm leading-6">{publication.title}</p>
          <p className="text-sm text-[#5c6370]">
            {publication.venue}. {publication.organization}, {publication.date}.
          </p>
        </CvSection>

        <CvSection title="Technical range">
          {skillGroups.map((group) => (
            <p key={group.title} className="mt-3 text-sm leading-6">
              <span className="font-medium">{group.title}.</span> {group.items.join(" · ")}
            </p>
          ))}
        </CvSection>

        <CvSection title="Certifications">
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CvSection>

        <p className="no-print mt-10 text-sm">
          <Link href="/contact" className="underline">
            Back to contact
          </Link>
        </p>
      </article>
    </Shell>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-[#17191d]/15 pt-4">
      <h2 className="font-mono text-[11px] tracking-[0.16em] text-[#d65a31] uppercase">{title}</h2>
      {children}
    </section>
  );
}
