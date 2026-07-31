"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { useLang, useT, useTheme, type Lang } from "@/components/providers";
import { DiscordIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/discord", key: "nav.discord" },
  { href: "/suporte", key: "nav.support" },
];

export function Navbar() {
  const pathname = usePathname();
  const t = useT();
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (href: string) =>
    `block whitespace-nowrap rounded-[8px] px-3 py-[5px] text-[0.855rem] font-medium transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
      isActive(href)
        ? "bg-soft text-primary"
        : "text-secondary hover:bg-soft hover:text-primary"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[200] h-16 border-b border-soft bg-nav-bg backdrop-blur-[20px] backdrop-saturate-[160%]">
        <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center gap-2 px-[clamp(1.25rem,5vw,3rem)]">
          <Link
            href="/"
            className="mr-6 flex shrink-0 items-center gap-[9px]"
            aria-label="TetrisCloud — página inicial"
          >
            <Image
              src="/images/logo.png"
              alt="Logo da TetrisCloud"
              width={28}
              height={28}
              className="block h-7 w-7 rounded-[7px] object-contain"
            />
            <span className="whitespace-nowrap font-display text-[0.975rem] font-extrabold tracking-[-0.02em] text-primary">
              {SITE.name}
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden min-[769px]:block">
            <ul className="flex list-none items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={navLinkClass(link.href)}>
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1" aria-hidden="true" />

          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                aria-label="Idioma"
                className="cursor-pointer appearance-none rounded-[8px] border border-med bg-elevated py-[5px] pl-2.5 pr-8 text-[0.8rem] font-medium text-secondary outline-none transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-accent hover:text-primary"
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted" />
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"
              }
              className="flex h-[34px] w-[34px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] border border-med bg-elevated text-secondary transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-subtle hover:text-primary"
            >
              {theme === "dark" ? (
                <Sun className="h-[15px] w-[15px]" />
              ) : (
                <Moon className="h-[15px] w-[15px]" />
              )}
            </button>

            <a
              href={SITE.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 whitespace-nowrap rounded-[8px] bg-accent px-3.5 py-1.5 text-[0.825rem] font-semibold text-white transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-px hover:bg-accent-hover hover:shadow-[0_4px_14px_var(--accent-glow)] min-[769px]:flex"
            >
              <DiscordIcon className="h-3.5 w-3.5" />
              <span>{t("nav.cta")}</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menu"
              className="flex h-[34px] w-[34px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] border border-med bg-elevated text-secondary transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-subtle hover:text-primary min-[769px]:hidden"
            >
              {open ? (
                <X className="h-[18px] w-[18px]" />
              ) : (
                <Menu className="h-[18px] w-[18px]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          role="navigation"
          aria-label="Menu mobile"
          className="fixed left-0 right-0 top-16 z-[199] flex flex-col gap-0.5 border-b border-soft bg-surface p-4 animate-slide-down min-[769px]:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-[8px] px-3 py-2.5 text-[0.9rem] font-medium transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isActive(link.href)
                  ? "bg-soft text-primary"
                  : "text-secondary hover:bg-soft hover:text-primary"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="my-2 h-px bg-soft" />
          <a
            href={SITE.discord}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-[8px] px-3 py-2.5 text-[0.9rem] font-medium text-secondary transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-soft hover:text-primary"
          >
            {t("nav.cta")}
          </a>
        </div>
      ) : null}
    </>
  );
}
