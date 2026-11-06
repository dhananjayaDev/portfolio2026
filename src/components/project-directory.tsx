"use client";

import { useMemo, useState } from "react";
import { categoryShort, getLineup, projectCategories, type Project, type ProjectCategory } from "@/data/projects";
import { ProjectGrid } from "./project-card";

type Filter = "All" | ProjectCategory;

export function ProjectDirectory({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const order = new Map(getLineup().map((project, index) => [project.slug, index]));
    return projects
      .filter((project) => {
        const categoryOk = category === "All" || project.category === category;
        if (!categoryOk) return false;
        if (!needle) return true;
        const haystack = [project.title, project.summary, project.context, project.kind, ...project.stack]
          .join(" ")
          .toLowerCase();
        return haystack.includes(needle);
      })
      .sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0));
  }, [category, projects, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line px-6 py-6 lg:flex-row lg:items-center lg:justify-between md:px-10">
        <div className="flex gap-2 overflow-x-auto">
          <FilterButton active={category === "All"} onClick={() => setCategory("All")}>
            All
          </FilterButton>
          {projectCategories.map((item) => (
            <FilterButton key={item} active={category === item} onClick={() => setCategory(item)}>
              {categoryShort[item]}
            </FilterButton>
          ))}
        </div>
        <label className="block w-full lg:w-64">
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="Search"
            className="w-full border border-line bg-sunken px-3 py-2 font-mono text-[11px] tracking-[0.08em] uppercase outline-none placeholder:text-faint"
          />
        </label>
      </div>
      <p className="px-6 py-4 font-mono text-[11px] tracking-[0.16em] text-faint uppercase md:px-10">
        {matches.length} {matches.length === 1 ? "system" : "systems"}
      </p>
      {matches.length > 0 ? (
        <ProjectGrid projects={matches} />
      ) : (
        <p className="border-t border-line px-6 py-16 text-muted md:px-10">No systems match this search.</p>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase transition ${
        active ? "bg-foreground text-background" : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
