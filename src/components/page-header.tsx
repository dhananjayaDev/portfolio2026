export function PageHeader({
  index,
  eyebrow,
  title,
  lede,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line px-6 py-14 md:px-10 md:py-20">
      <p className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
        {index} / {eyebrow}
      </p>
      <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-[-0.03em] text-strong sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
    </header>
  );
}
