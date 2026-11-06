"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cardTone, categoryShort, type Project } from "@/data/projects";

function ColoredTitle({ title, ink, inkDark }: { title: string; ink: string; inkDark: string }) {
  const words = title.trim().split(/\s+/);
  const last = words.pop() ?? title;
  const lead = words.join(" ");

  return (
    <>
      {lead ? <span>{lead} </span> : null}
      <span
        className="text-(--card-ink) dark:text-(--card-ink-dark)"
        style={{ ["--card-ink" as string]: ink, ["--card-ink-dark" as string]: inkDark }}
      >
        {last}
      </span>
    </>
  );
}

export function ProjectCard({
  project,
  priority = false,
  index = 0,
}: {
  project: Project;
  priority?: boolean;
  index?: number;
}) {
  const reduce = useReducedMotion();
  const tone = cardTone(project);

  const body = (
    <Link href={`/projects/${project.slug}`} className="group relative flex h-full flex-col">
      <span
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-(--card) transition-transform duration-300 group-hover:scale-x-100"
        style={{ ["--card" as string]: tone.app }}
      />
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
        <span className="bg-(--card) px-2 py-1 font-mono text-[11px] font-bold text-black" style={{ ["--card" as string]: tone.app }}>
          {project.number}
        </span>
        <p className="truncate font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
          {categoryShort[project.category]}
        </p>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-sunken">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pt-0 pb-6 md:px-6">
        <div
          className="relative -mt-7 size-14 overflow-hidden rounded-xl bg-(--card) shadow-[0_6px_14px_rgba(0,0,0,0.28)] transition duration-300 ease-out group-hover:-translate-y-1"
          style={{ ["--card" as string]: tone.app }}
        >
          <Image src="/cards/wolf.png" alt="" fill sizes="56px" className="object-cover" />
        </div>
        <h3 className="mt-4 font-display text-[1.7rem] leading-none font-medium tracking-[-0.03em] text-strong">
          <ColoredTitle title={project.title} ink={tone.ink} inkDark={tone.inkDark} />
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          <li className="border border-line bg-sunken px-1.5 py-px font-mono text-[10px] font-medium tracking-wide text-muted uppercase">
            {project.kind}
          </li>
          {project.stack.slice(0, 3).map((tech) => (
            <li
              key={tech}
              className="border border-line bg-sunken px-1.5 py-px font-mono text-[10px] font-medium tracking-wide text-muted uppercase"
            >
              {tech}
            </li>
          ))}
        </ul>
        <span className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-[11px] tracking-[0.14em] text-muted uppercase transition group-hover:text-foreground">
          Open project
          <ArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );

  if (reduce) {
    return <article className="h-full bg-background">{body}</article>;
  }

  return (
    <motion.article
      className="h-full bg-background"
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.045 }}
    >
      {body}
    </motion.article>
  );
}

export function ProjectGrid({
  projects,
  priorityCount = 0,
}: {
  projects: Project[];
  priorityCount?: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2 xl:grid-cols-4">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} priority={index < priorityCount} index={index} />
      ))}
    </div>
  );
}
