"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print border border-foreground px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
    >
      Print or save as PDF
    </button>
  );
}
