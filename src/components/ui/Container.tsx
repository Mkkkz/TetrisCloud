import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────
   CONTAINER
───────────────────────────────────────────────── */
type ContainerProps = {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
};

export function Container({ children, narrow = false, className = "" }: ContainerProps) {
  const width = narrow ? "max-w-[820px]" : "max-w-[1280px] min-[1800px]:max-w-[1440px]";
  return (
    <div className={`mx-auto w-full ${width} px-[clamp(1.25rem,5vw,3rem)] ${className}`}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────── */
type SectionProps = {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
};

export function Section({ children, alt = false, id, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative z-[1] py-[clamp(4rem,8vw,6.5rem)] ${
        alt ? "bg-subtle" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

/* ─────────────────────────────────────────────────
   DIVIDER
───────────────────────────────────────────────── */
export function Divider() {
  return (
    <div className="relative z-[1] h-px bg-[linear-gradient(90deg,transparent_0%,var(--border-med)_30%,var(--border-med)_70%,transparent_100%)]" />
  );
}

/* ─────────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────────── */
type SectionHeaderProps = {
  eyebrow?: string;
  eyebrowIcon?: ReactNode;
  title?: string;
  lead?: string;
};

export function SectionHeader({ eyebrow, eyebrowIcon, title, lead }: SectionHeaderProps) {
  return (
    <div className="mb-[clamp(2.5rem,4vw,3.5rem)]">
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.09em] text-accent">
          {eyebrowIcon}
          <span>{eyebrow}</span>
        </p>
      ) : null}
      {title ? (
        <h2 className="mb-3 font-display text-[clamp(1.65rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-primary">
          {title}
        </h2>
      ) : null}
      {lead ? (
        <p className="max-w-[520px] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.7] text-secondary">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
