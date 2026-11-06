import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowUpRight, FileText, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { siDiscord, siGithub } from "simple-icons";
import { BrandIcon } from "@/components/brand-icon";
import { PageHeader } from "@/components/page-header";
import { Shell } from "@/components/shell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email, location and CV for Dhananjaya Dissanayake.",
};

const channels: {
  title: string;
  text: string;
  action: string;
  href?: string;
  icon: ReactNode;
}[] = [
  {
    title: "Email",
    text: site.email,
    action: "Write to me",
    href: `mailto:${site.email}`,
    icon: <Mail size={16} aria-hidden="true" />,
  },
  {
    title: "LinkedIn",
    text: "The public profile.",
    action: "Open LinkedIn",
    href: site.linkedin,
    icon: <span className="font-display text-[15px] leading-none font-semibold tracking-[-0.04em]">in</span>,
  },
  {
    title: "GitHub",
    text: "Repositories and the project lineup.",
    action: "Browse on GitHub",
    href: site.github,
    icon: <BrandIcon icon={siGithub} className="h-4 w-4" />,
  },
  {
    title: "Discord",
    text: "The server invite.",
    action: "Join the Discord",
    href: site.discord,
    icon: <BrandIcon icon={siDiscord} className="h-4 w-4" />,
  },
  {
    title: "Location",
    text: "Based in Colombo.",
    action: site.location,
    icon: <MapPin size={16} aria-hidden="true" />,
  },
  {
    title: "CV",
    text: "A one-page résumé, ready to print.",
    action: "View the CV",
    href: "/cv",
    icon: <FileText size={16} aria-hidden="true" />,
  },
];

export default function ContactPage() {
  return (
    <Shell>
      <PageHeader
        index="06"
        eyebrow="Contact"
        title="Start a conversation."
        lede="Email, LinkedIn, GitHub, and the Discord server are below. A phone number is intentionally left off this page."
      />
      <div className="flex items-center justify-between border-b border-line px-6 py-3 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          <span className="text-faint">01</span>
          <span aria-hidden="true" className="mx-2 text-faint">
            /
          </span>
          Channels
        </p>
        <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">Pick one</p>
      </div>
      <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 xl:grid-cols-3">
        {channels.map((channel, index) => (
          <Channel key={channel.title} channel={channel} letter={String.fromCharCode(65 + index)} />
        ))}
      </div>
    </Shell>
  );
}

function Channel({
  channel,
  letter,
}: {
  channel: (typeof channels)[number];
  letter: string;
}) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-10 place-items-center rounded-lg border border-line text-foreground">
          {channel.icon}
        </span>
        <span className="font-mono text-[11px] tracking-[0.16em] text-faint">{letter}</span>
      </div>
      <h2 className="mt-8 font-display text-[1.7rem] leading-none font-medium tracking-[-0.03em] text-strong">
        {channel.title}
      </h2>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{channel.text}</p>
      <span className="mt-auto flex items-center gap-1.5 pt-10 font-mono text-[11px] tracking-[0.14em] text-muted uppercase transition group-hover:text-foreground">
        {channel.action}
        {channel.href ? <ArrowUpRight size={14} /> : null}
      </span>
    </>
  );

  const className =
    "group flex min-h-72 flex-col bg-background p-6 transition-colors md:min-h-80 md:p-8";

  if (!channel.href) {
    return <div className={className}>{body}</div>;
  }

  if (channel.href.startsWith("/")) {
    return (
      <Link href={channel.href} className={`${className} hover:bg-sunken`}>
        {body}
      </Link>
    );
  }

  const external = channel.href.startsWith("http");

  return (
    <a
      href={channel.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${className} hover:bg-sunken`}
    >
      {body}
    </a>
  );
}
