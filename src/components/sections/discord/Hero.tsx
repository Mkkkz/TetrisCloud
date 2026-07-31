import { Users } from "lucide-react";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { DiscordIcon } from "@/components/ui/icons";
import { SITE } from "@/lib/site";

export function DiscordHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-[1] flex min-h-[70svh] items-center justify-center overflow-hidden px-[clamp(1.25rem,5vw,3rem)] pb-16 pt-[calc(64px+4.5rem)] text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[10%] left-1/2 h-[420px] w-[min(600px,90vw)] -translate-x-1/2 animate-glow-pulse bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,var(--accent-glow)_0%,transparent_70%)]"
      />

      <div className="relative z-[1] w-full max-w-[680px]">
        <div className="mb-7 inline-flex items-center gap-[7px] rounded-full border border-accent-glow bg-accent-subtle px-3.5 py-[5px] text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-accent">
          <Users className="h-3 w-3" />
          <Text id="hero.badge">Comunidade</Text>
        </div>

        <h1
          id="hero-title"
          className="mb-[1.1rem] font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary"
        >
          <span>
            <Text id="hero.title1">Comunidade</Text>
          </span>
          <br />
          <em className="not-italic text-accent">TetrisCloud</em>
        </h1>

        <p className="mx-auto mb-10 max-w-[500px] text-[clamp(1rem,2vw,1.125rem)] leading-[1.7] text-secondary">
          <Text id="hero.subtitle">
            Entre no nosso Discord para suporte, atualizações e para fazer parte da
            comunidade.
          </Text>
        </p>

        <div className="flex flex-col items-center gap-5">
          <Button href={SITE.discord} external size="lg" icon={<DiscordIcon />}>
            <Text id="hero.cta">Entrar no Discord</Text>
          </Button>
        </div>
      </div>
    </section>
  );
}
