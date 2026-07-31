import { LifeBuoy } from "lucide-react";
import { Text } from "@/components/ui/Text";

export function SupportHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-[1] overflow-hidden px-[clamp(1.25rem,5vw,3rem)] pb-16 pt-[calc(64px+4.5rem)] text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[10%] left-1/2 h-[380px] w-[min(500px,90vw)] -translate-x-1/2 animate-glow-pulse bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,var(--accent-glow)_0%,transparent_70%)]"
      />

      <div className="relative z-[1] mx-auto w-full max-w-[640px]">
        <div className="mb-7 inline-flex items-center gap-[7px] rounded-full border border-accent-glow bg-accent-subtle px-3.5 py-[5px] text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-accent">
          <LifeBuoy className="h-3 w-3" />
          <Text id="hero.badge">Suporte</Text>
        </div>

        <h1
          id="hero-title"
          className="mb-4 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary"
        >
          <Text id="hero.title">Central de </Text>
          <em className="not-italic text-accent">
            <Text id="hero.titleEm">Suporte</Text>
          </em>
        </h1>

        <p className="mx-auto max-w-[480px] text-[clamp(0.975rem,1.8vw,1.1rem)] leading-[1.7] text-secondary">
          <Text id="hero.subtitle">
            Precisa de ajuda? Estamos disponíveis pelo Discord e por e-mail.
          </Text>
        </p>
      </div>
    </section>
  );
}
