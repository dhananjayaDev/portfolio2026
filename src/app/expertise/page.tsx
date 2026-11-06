import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Shell } from "@/components/shell";
import { skillGroups } from "@/data/expertise";

export const metadata: Metadata = {
  title: "Technical Expertise",
  description: "Technologies grouped by programming, data, cloud, AI and operations.",
};

export default function ExpertisePage() {
  return (
    <Shell>
      <PageHeader
        index="04"
        eyebrow="Capabilities"
        title="Technical Expertise"
        lede="Technologies grouped by the work they support. No percentages. A tool is listed because it has been used, not because a bar looks full."
      />
      <div className="grid gap-px bg-line sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <section key={group.title} className="bg-background p-6 sm:p-8">
            <p className="w-fit bg-[#74aaff] px-1.5 py-0.5 font-mono text-[11px] font-bold text-black">0{index + 1}</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.03em] text-strong">{group.title}</h2>
            {group.note ? <p className="mt-3 text-sm leading-6 text-muted">{group.note}</p> : null}
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="border border-line px-3 py-2 font-mono text-xs">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Shell>
  );
}
