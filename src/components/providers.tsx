"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { baseDict, pageDicts, type Dict, type Lang, type Scope } from "@/lib/i18n";

type Theme = "light" | "dark";

const THEME_KEY = "tc-theme";
const LANG_KEY = "tc-lang";

/* ─────────────────────────────────────────────────
   THEME STORE
───────────────────────────────────────────────── */
let currentTheme: Theme = "dark";
const themeListeners = new Set<() => void>();

function subscribeTheme(listener: () => void) {
  themeListeners.add(listener);
  return () => {
    themeListeners.delete(listener);
  };
}

function getThemeSnapshot(): Theme {
  return currentTheme;
}

function getThemeServerSnapshot(): Theme {
  return "dark";
}

function setStoredTheme(next: Theme) {
  currentTheme = next;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    /* private mode */
  }
  document.documentElement.setAttribute("data-theme", next);
  themeListeners.forEach((listener) => listener());
}

/* ─────────────────────────────────────────────────
   LANGUAGE STORE
───────────────────────────────────────────────── */
let currentLang: Lang = "pt";
const langListeners = new Set<() => void>();

function subscribeLang(listener: () => void) {
  langListeners.add(listener);
  return () => {
    langListeners.delete(listener);
  };
}

function getLangSnapshot(): Lang {
  return currentLang;
}

function getLangServerSnapshot(): Lang {
  return "pt";
}

function setStoredLang(next: Lang) {
  currentLang = next;
  try {
    localStorage.setItem(LANG_KEY, next);
  } catch {
    /* private mode */
  }
  document.documentElement.lang = next === "pt" ? "pt-BR" : next;
  langListeners.forEach((listener) => listener());
}

/* ─────────────────────────────────────────────────
   CONTEXTS
───────────────────────────────────────────────── */
type LangContextValue = { lang: Lang; setLang: (lang: Lang) => void };
type ThemeContextValue = { theme: Theme; toggleTheme: () => void };

const LangContext = createContext<LangContextValue | null>(null);
const ThemeContext = createContext<ThemeContextValue | null>(null);
const DictContext = createContext<Dict | null>(null);

/* ─────────────────────────────────────────────────
   PROVIDERS
───────────────────────────────────────────────── */
function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY);
    setStoredLang(saved === "en" || saved === "es" || saved === "pt" ? saved : "pt");
  }, []);

  const setLang = useCallback((next: Lang) => setStoredLang(next), []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    setStoredTheme(saved === "light" || saved === "dark" ? saved : "dark");
  }, []);

  const toggleTheme = useCallback(() => {
    setStoredTheme(currentTheme === "dark" ? "light" : "dark");
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function DictProvider({ scope, children }: { scope: Scope; children: ReactNode }) {
  const { lang } = useLang();
  const dict = useMemo(
    () => ({ ...baseDict[lang], ...pageDicts[scope][lang] }),
    [scope, lang]
  );

  useEffect(() => {
    const title = dict["meta.title"];
    if (title) document.title = title;
  }, [dict]);

  return <DictContext.Provider value={dict}>{children}</DictContext.Provider>;
}

/* ─────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────── */
function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang deve ser usado dentro de <LangProvider>");
  return ctx;
}

function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme deve ser usado dentro de <ThemeProvider>");
  return ctx;
}

function useDict() {
  const ctx = useContext(DictContext);
  if (!ctx) throw new Error("useDict deve ser usado dentro de <DictProvider>");
  return ctx;
}

/** Tradução robusta: usa o dicionário da página ou o base (navbar/rodapé). */
function useT() {
  const pageDict = useContext(DictContext);
  const { lang } = useLang();
  const dict = pageDict ?? baseDict[lang];
  return (id: string, fallback?: string) => dict[id] ?? fallback ?? "";
}

/* ─────────────────────────────────────────────────
   ROOT PROVIDER
───────────────────────────────────────────────── */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LangProvider>
  );
}

export { DictProvider, useDict, useLang, useT, useTheme };
export type { Lang, Theme };
