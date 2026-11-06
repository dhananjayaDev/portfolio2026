import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Shell } from "@/components/shell";
import { roles } from "@/data/experience";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles at Bluechip Technologies Asia and Ravana Industries.",
};

export default function ExperiencePage() {
  return (
    <Shell>
      <PageHeader
        index="03"
        eyebrow="Timeline"
        title="Experience"
        lede="Four roles across Bluechip Technologies Asia and Ravana Industries. Each one links to the project write-ups that belong to it."
      />
      <ol>
        {roles.map((role) => {
          const linked = role.projectSlugs
            .map((slug) => getProject(slug))
            .filter((project) => project !== undefined);

          return (
            <li key={`${role.organization}-${role.period}`} className="grid gap-6 border-b border-line px-6 py-10 last:border-b-0 md:px-10 lg:grid-cols-[16rem_1fr]">
              <div>
                <p className="font-mono text-[11px] tracking-[0.14em] text-accent-ink uppercase">{role.period}</p>
                <p className="mt-3 text-sm text-muted">{role.organization}</p>
              </div>
              <div>
                <h2 className="font-display text-4xl font-medium tracking-[-0.03em] text-strong">{role.position}</h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted">{role.summary}</p>
                <ul className="mt-6 space-y-3">
                  {role.contributions.map((item) => (
                    <li key={item} className="border-l border-line pl-4 leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
                {linked.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {linked.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="border border-line px-3 py-2 font-mono text-[11px] tracking-[0.08em] uppercase hover:border-foreground"
                      >
                        {project.number} {project.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </Shell>
  );
}
