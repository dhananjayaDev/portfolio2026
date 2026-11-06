import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProjectGrid } from "@/components/project-card";
import { Shell } from "@/components/shell";
import { cardTone, categoryShort, getProject, getRelatedProjects, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage(props: ProjectPageProps) {
  return (
    <Suspense
      fallback={
        <Shell>
          <p className="px-6 py-16 font-mono text-[11px] tracking-[0.16em] text-faint uppercase md:px-10">
            Opening system
          </p>
        </Shell>
      }
    >
      <ProjectContent {...props} />
    </Suspense>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const tone = cardTone(project);
  const color = tone.app;
  const titleWords = project.title.trim().split(/\s+/);
  const titleLast = titleWords.pop() ?? project.title;
  const titleLead = titleWords.join(" ");

  return (
    <Shell>
      <article>
        <header className="border-b border-line px-6 py-12 md:px-10 md:py-16">
          <Link
            href="/#lineup"
            className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase hover:text-foreground"
          >
            ← The lineup
          </Link>
          <div className="mt-8 flex items-center justify-between gap-4">
            <span className="px-2 py-1 font-mono text-[11px] font-bold text-black" style={{ background: color }}>
              {project.number}
            </span>
            <p className="font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
              {categoryShort[project.category]} · {project.kind}
            </p>
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] font-semibold tracking-[-0.03em] text-strong sm:text-6xl">
            {titleLead ? <span>{titleLead} </span> : null}
            <span
              className="text-(--card-ink) dark:text-(--card-ink-dark)"
              style={{ ["--card-ink" as string]: tone.ink, ["--card-ink-dark" as string]: tone.inkDark }}
            >
              {titleLast}
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
        </header>

        <div className="relative aspect-[16/8] border-b border-line bg-sunken">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
        {project.image.src.includes("images.unsplash.com") ? (
          <p className="border-b border-line px-6 py-3 font-mono text-[10px] tracking-[0.12em] text-faint uppercase md:px-10">
            Reference image for development. Replace it with a screenshot of the system.
          </p>
        ) : null}

        <div className="grid lg:grid-cols-[1.4fr_0.8fr]">
          <div className="divide-y divide-line border-b border-line lg:border-r lg:border-b-0">
            <Section title="Overview">
              <p className="text-lg leading-relaxed">{project.overview}</p>
            </Section>
            <Section title="The problem">
              <p className="leading-relaxed text-muted">{project.problem}</p>
            </Section>
            <Section title="Contribution">
              <ul className="space-y-3">
                {project.contribution.map((item) => (
                  <li key={item} className="border-l-2 pl-4 leading-relaxed" style={{ borderColor: color }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
            <Section title="Architecture">
              <ol className="grid gap-px bg-line sm:grid-cols-2">
                {project.architecture.map((step, index) => (
                  <li key={step} className="bg-background p-4">
                    <span className="inline-block px-1.5 py-0.5 font-mono text-[11px] font-bold text-black" style={{ background: color }}>
                      0{index + 1}
                    </span>
                    <p className="mt-3">{step}</p>
                  </li>
                ))}
              </ol>
            </Section>
            <Section title="Outcome">
              <p className="leading-relaxed">{project.outcome}</p>
            </Section>
          </div>
          <aside className="h-fit bg-surface px-6 py-8 lg:sticky lg:top-12 md:px-8">
            <p className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">Stack</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="border border-line bg-sunken px-1.5 py-px font-mono text-[10px] font-medium tracking-wide uppercase"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.organization ? <p className="mt-8 text-sm text-muted">{project.organization}</p> : null}
            <p className="mt-6 text-sm leading-6 text-muted">{project.context}</p>
            {project.links?.length ? (
              <ul className="mt-6 space-y-2">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-strong underline decoration-line underline-offset-4 hover:decoration-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </aside>
        </div>

        {related.length > 0 ? (
          <section className="border-t border-line">
            <h2 className="px-6 py-8 font-display text-3xl font-medium tracking-[-0.03em] text-strong md:px-10">
              Related systems
            </h2>
            <ProjectGrid projects={related} />
          </section>
        ) : null}
      </article>
    </Shell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="px-6 py-8 md:px-10">
      <h2 className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
