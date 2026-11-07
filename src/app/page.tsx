import { ChartColumn, Cpu, Database, GitBranch, MessagesSquare, Monitor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siDiscord, siGithub } from "simple-icons";
import { BrandIcon } from "@/components/brand-icon";
import { ProjectGrid } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionAddress } from "@/components/section-address";
import { Shell } from "@/components/shell";
import { getLineup, projects } from "@/data/projects";
import { site } from "@/data/site";

const principles = [
  {
    icon: Database,
    title: "Data before the chart",
    text: "A report starts in the source system. The pipeline, the warehouse, and the model come before anyone opens a dashboard.",
  },
  {
    icon: Cpu,
    title: "Models in the workflow",
    text: "A forecast, a matcher, or a retrieval system has to land somewhere a person already works. A score with nowhere to go is not a system.",
  },
  {
    icon: Monitor,
    title: "Software people run",
    text: "Billing, repairs, and automation are built for a counter or a team. The useful version is the one that stays open on a Tuesday.",
  },
  {
    icon: ChartColumn,
    title: "Measured, then shown",
    text: "A holdout, a MAPE, or a reconciliation sits next to the chart. A number on a page should be able to say where it came from.",
  },
  {
    icon: GitBranch,
    title: "Open where it can be",
    text: "Public systems live on GitHub, with the code a reader can clone. Work that belongs to a shop or a client stays with the people who run it.",
  },
  {
    icon: MessagesSquare,
    title: "A direct line",
    text: "Email, LinkedIn, GitHub, and the Discord are the way in. A phone number is left off this site on purpose.",
  },
] as const;

export default function HomePage() {
  const lineup = getLineup();

  return (
    <Shell>
      <section className="border-b border-line px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">01 / Engineering work</p>
          <p className="mt-8 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            {site.roles.join(" · ")}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] font-semibold tracking-[-0.03em] text-strong sm:text-7xl">
            {projects.length} systems. One <span className="text-accent-ink">practice.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{site.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#lineup"
              className="bg-foreground px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-background uppercase"
            >
              View the lineup
            </Link>
            <a
              href={site.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-foreground uppercase hover:border-foreground"
            >
              <BrandIcon icon={siDiscord} />
              Join the Discord
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-foreground uppercase hover:border-foreground"
            >
              <BrandIcon icon={siGithub} />
              Browse on GitHub
            </a>
            <Link
              href="/contact"
              className="border border-line px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-foreground uppercase hover:border-foreground"
            >
              Contact
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="lineup" className="scroll-mt-12 border-b border-line">
        <SectionAddress index="02" label="The lineup" title="Pick a system to explore" />
        <div className="flex flex-col gap-4 border-b border-line px-6 py-8 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-strong sm:text-4xl">
              Pick a system to explore
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase hover:text-foreground"
          >
            Filter the directory
          </Link>
        </div>
        <ProjectGrid projects={lineup} priorityCount={3} />
      </section>

      <section className="border-b border-line">
        <div className="flex flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-10 md:py-16">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">Next up</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.03em] text-strong sm:text-5xl">
              More systems <span className="text-accent-ink">on the way.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              The lineup is the work so far. The Discord is where the next system gets talked through, tried, and followed.
            </p>
          </div>
          <a
            href={site.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 bg-foreground px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-background uppercase"
          >
            <BrandIcon icon={siDiscord} className="h-3.5 w-3.5" />
            Join the Discord
          </a>
        </div>
      </section>

      <section id="principles" className="scroll-mt-12 border-b border-line">
        <SectionAddress index="03" label="Principles" title="Shared by the work" />
        <div className="border-b border-line px-6 py-12 md:px-10 md:py-16">
          <h2 className="max-w-3xl font-display text-4xl font-medium tracking-[-0.03em] text-strong sm:text-6xl">
            Built the <span className="text-accent-ink">same</span> way.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Every system on this site, from a lakehouse to a point of sale, is held to the same rules.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle, index) => (
            <article key={principle.title} className="bg-background px-6 py-8 md:px-8 md:py-10">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-10 place-items-center rounded-lg border border-line text-accent">
                  <principle.icon size={16} aria-hidden="true" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.16em] text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-medium tracking-[-0.03em] text-strong">
                {principle.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-12">
        <SectionAddress index="04" label="About" title={site.name} />
        <div className="grid md:grid-cols-[minmax(0,320px)_1fr]">
        <figure className="relative aspect-[2/3] border-b border-line md:border-r md:border-b-0">
          <Image
            src={site.portrait}
            alt={site.portraitAlt}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover"
          />
        </figure>
        <div className="px-6 py-10 md:px-10 md:py-14">
          <h2 className="font-display text-4xl font-medium tracking-[-0.03em] text-strong sm:text-5xl">
            {site.name}
          </h2>
          <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
            {site.roles.join(" / ")}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">{site.positioning}</p>
          <p className="mt-5 text-sm leading-7 text-muted">
            {site.location}. {site.availability}. {site.years} years across technical work and internships.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/experience"
              className="border border-line px-3 py-2 font-mono text-[11px] tracking-[0.14em] uppercase hover:border-foreground"
            >
              Experience
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="border border-line px-3 py-2 font-mono text-[11px] tracking-[0.14em] uppercase hover:border-foreground"
            >
              Email
            </a>
          </div>
        </div>
        </div>
      </section>
    </Shell>
  );
}
