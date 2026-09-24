export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "naruto5e-theme";

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = theme;
}

export function setStoredTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}

/**
 * Script inline aplicado no `<head>`/início do `<body>` antes da hidratação,
 * para setar `data-theme` de forma síncrona e evitar flash de tema errado
 * (FOUC) — o padrão de tema "dark" já é o default via CSS, então isso só
 * importa quando o usuário tiver escolhido "light" anteriormente.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"){document.documentElement.dataset.theme="light";}}catch(e){}})();`;
