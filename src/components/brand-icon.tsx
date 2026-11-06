import type { SimpleIcon } from "simple-icons";

export function BrandIcon({
  icon,
  className = "h-3.5 w-3.5",
}: {
  icon: SimpleIcon;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={icon.path} />
    </svg>
  );
}
