import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectDirectory } from "@/components/project-directory";
import { Shell } from "@/components/shell";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description: "A searchable directory of data, AI, software, automation and IoT projects.",
};

export default function ProjectsPage() {
  return (
    <Shell>
      <PageHeader
        index="02"
        eyebrow="Directory"
        title="The directory."
        lede="The same lineup, with category filters and search. Featured systems stay first."
      />
      <ProjectDirectory projects={projects} />
    </Shell>
  );
}
