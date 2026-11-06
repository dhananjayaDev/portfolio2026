import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Shell } from "@/components/shell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, location and CV for Dhananjaya Dissanayake.",
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHeader
        index="06"
        eyebrow="Contact"
        title="Start a conversation."
        lede="Email, LinkedIn, GitHub, and the Discord server are below. A phone number is intentionally left off this page."
      />
      <div className="divide-y divide-line">
        <Row label="Email" value={site.email} href={`mailto:${site.email}`} />
        <Row label="LinkedIn" value="LinkedIn profile" href={site.linkedin} />
        <Row label="GitHub" value="GitHub profile" href={site.github} />
        <Row label="Discord" value="Join the Discord" href={site.discord} />
        <Row label="Location" value={site.region} />
        <Row label="CV" value="View and print" href="/cv" />
      </div>
    </Shell>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:items-baseline">
      <p className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">{label}</p>
      <p className="font-display text-3xl font-medium tracking-[-0.03em] text-strong sm:text-4xl">{value}</p>
    </div>
  );

  if (!href) return <div className="px-6 md:px-10">{content}</div>;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className="block px-6 hover:text-accent-ink md:px-10">
        {content}
      </Link>
    );
  }

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block px-6 hover:text-accent-ink md:px-10"
    >
      {content}
    </a>
  );
}
