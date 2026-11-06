import Link from "next/link";
import { Shell } from "@/components/shell";

export default function NotFound() {
  return (
    <Shell className="px-6 py-24 md:px-10">
      <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">04 / Missing</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.03em] text-strong">This page is not in the directory.</h1>
      <Link href="/" className="mt-8 inline-block font-mono text-[11px] tracking-[0.14em] uppercase hover:text-accent-ink">
        Return home
      </Link>
    </Shell>
  );
}
