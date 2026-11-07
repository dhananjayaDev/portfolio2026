"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionAddress({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  const reduce = useReducedMotion();

  const inner = (
    <div className="flex items-center justify-between gap-4 px-6 py-3 md:px-10">
      <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
        <span className="text-faint">{index}</span>
        <span aria-hidden="true" className="mx-2 text-faint">
          /
        </span>
        {label}
      </p>
      <p className="hidden truncate font-mono text-[11px] tracking-[0.18em] text-faint uppercase sm:block">
        {title}
      </p>
    </div>
  );

  const content = reduce ? (
    inner
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-48px 0px -30% 0px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {inner}
    </motion.div>
  );

  return (
    <div className="sticky top-12 z-30">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-[calc(50%-50vw)] z-10 h-px w-screen bg-line" />
      <div className="border-b border-line bg-background/60 backdrop-blur-md">{content}</div>
    </div>
  );
}
