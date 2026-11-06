"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      aria-label={mounted ? (isDark ? "Switch to light theme" : "Switch to dark theme") : "Toggle color theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-12 w-12 items-center justify-center border-l border-line text-muted transition hover:bg-foreground hover:text-background"
    >
      {mounted ? (
        isDark ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />
      ) : (
        <span className="size-4" />
      )}
    </button>
  );
}
