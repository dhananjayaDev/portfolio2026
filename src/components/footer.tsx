import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 border-x border-line px-6 py-6 font-mono text-[11px] tracking-[0.14em] text-faint uppercase sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>
          <span className="text-foreground">{site.name}</span>
          <span className="px-2">/</span>
          {site.location}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            Email
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={site.discord} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Discord
          </a>
          <Link href="/#lineup" className="hover:text-foreground">
            Lineup
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
