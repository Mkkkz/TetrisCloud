import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  href?: string;
  external?: boolean;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center gap-[7px] cursor-pointer whitespace-nowrap font-semibold " +
  "transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)]";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover hover:-translate-y-px",
  ghost:
    "bg-elevated text-primary border border-med hover:bg-subtle hover:-translate-y-px hover:shadow-sm",
};

const sizes: Record<Size, string> = {
  sm: "text-[0.82rem] px-4 py-2 rounded-md [&_svg]:h-3.5 [&_svg]:w-3.5",
  md: "text-[0.9rem] px-[22px] py-[11px] rounded-md [&_svg]:h-[15px] [&_svg]:w-[15px]",
  lg: "text-[1.025rem] px-8 py-[14px] rounded-lg [&_svg]:h-[18px] [&_svg]:w-[18px]",
};

export function Button({
  href,
  external = false,
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={classes}
      >
        {icon}
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel} className={classes}>
      {icon}
      {children}
    </button>
  );
}
