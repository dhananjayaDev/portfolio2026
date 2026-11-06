"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siDiscord } from "simple-icons";
import { BrandIcon } from "@/components/brand-icon";
import { nav, site } from "@/data/site";
import { ThemeToggle } from "./theme-toggle";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/projects");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 left-0 z-40 w-full border-b border-line bg-background/95 backdrop-blur-sm">
      <div className="flex h-12 items-stretch justify-between">
        <div className="flex min-w-0 items-stretch">
          <Link
            href="/"
            aria-label="Dhananjaya Dissanayake"
            className="flex items-center border-r border-line px-4 hover:opacity-70 sm:px-5"
            onClick={() => setOpen(false)}
          >
            <Image src="/brand/logo.png" alt="" width={24} height={24} priority className="h-6 w-auto dark:invert" />
          </Link>
          <nav className="hidden items-center md:flex" aria-label="Primary">
            {nav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className="flex h-full items-center px-2.5"
                >
                  <span
                    className={`px-1.5 py-0.5 font-mono text-[11px] tracking-[0.16em] uppercase ${
                      current ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-stretch">
          <a
            href={site.discord}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Discord"
            className="flex w-12 items-center justify-center border-l border-line text-muted hover:bg-foreground hover:text-background"
          >
            <BrandIcon icon={siDiscord} className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex w-12 items-center justify-center border-l border-line md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-line md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-line px-4 py-3 font-mono text-[11px] tracking-[0.16em] uppercase"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
