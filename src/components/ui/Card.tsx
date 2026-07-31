import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────
   CARD
───────────────────────────────────────────────── */
type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-xl border border-card-border bg-card-bg p-7 backdrop-blur-sm transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] before:opacity-0 before:transition-opacity before:duration-[220ms] hover:-translate-y-[3px] hover:border-accent-glow hover:shadow-md hover:before:opacity-100 ${className}`}
    >
      {children}
    </article>
  );
}

/* ─────────────────────────────────────────────────
   CARD ICON
───────────────────────────────────────────────── */
export function CardIcon({ children }: { children: ReactNode }) {
  return (
    <div className="mb-[1.1rem] flex h-10 w-10 items-center justify-center rounded-md border border-accent-glow bg-accent-subtle text-accent [&_svg]:h-[18px] [&_svg]:w-[18px]">
      {children}
    </div>
  );
}
