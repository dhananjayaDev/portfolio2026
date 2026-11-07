import { useId } from "react";

const fadeMask = {
  radial: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
  top: "linear-gradient(to bottom, transparent, black 40%)",
  bottom: "linear-gradient(to top, transparent, black 40%)",
} as const;

export function GridPattern({
  className,
  fade,
  cellSize = 40,
}: {
  className?: string;
  fade?: keyof typeof fadeMask;
  cellSize?: number;
}) {
  const id = useId().replace(/:/g, "");
  const mask = fade ? fadeMask[fade] : undefined;

  return (
    <div aria-hidden="true" data-slot="grid-pattern" className={`pointer-events-none ${className ?? ""}`}>
      <svg className="absolute inset-0 h-full w-full" style={mask ? { maskImage: mask, WebkitMaskImage: mask } : undefined}>
        <defs>
          <pattern id={id} width={cellSize} height={cellSize} patternUnits="userSpaceOnUse">
            <path d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`} fill="none" stroke="var(--line)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
