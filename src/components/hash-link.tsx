"use client";

import type { MouseEvent, ReactNode } from "react";

export function HashLink({
  href,
  className,
  children,
}: {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
}) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
