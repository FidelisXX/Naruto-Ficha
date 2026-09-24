"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { setStoredTheme, type Theme } from "@/lib/theme";

const THEME_CHANGE_EVENT = "naruto5e-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, callback);
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

// No servidor não há tema salvo ainda a considerar — "dark" bate com o
// script inline em layout.tsx (só reescreve para "light" quando aplicável),
// então o primeiro paint do cliente nunca diverge do HTML gerado no servidor.
function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setStoredTheme(next);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
      title={theme === "dark" ? "Tema claro" : "Tema escuro"}
      className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors cursor-pointer shrink-0"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
