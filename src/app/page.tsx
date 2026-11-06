import Image from "next/image";
import Link from "next/link";
import { ProjectGrid } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionAddress } from "@/components/section-address";
import { Shell } from "@/components/shell";
import { getLineup, projects } from "@/data/projects";
import { site } from "@/data/site";

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

      <section id="about" className="scroll-mt-12">
        <SectionAddress index="03" label="About" title={site.name} />
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
