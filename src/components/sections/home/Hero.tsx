import { Bolt, LifeBuoy } from "lucide-react";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { DiscordIcon } from "@/components/ui/icons";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-[1] flex min-h-[100svh] items-center justify-center overflow-hidden px-[clamp(1.25rem,5vw,3rem)] pb-20 pt-[calc(64px+5rem)] text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[10%] left-1/2 h-[500px] w-[min(700px,90vw)] -translate-x-1/2 animate-glow-pulse bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,var(--accent-glow)_0%,transparent_70%)]"
      />

      <div className="relative z-[1] w-full max-w-[760px]">
        <div className="mb-7 inline-flex items-center gap-[7px] rounded-full border border-accent-glow bg-accent-subtle px-3.5 py-[5px] text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-accent">
          <Bolt className="h-3 w-3" />
          <Text id="hero.badge">Infraestrutura moderna</Text>
        </div>

        <h1
          id="hero-title"
          className="mb-5 font-display text-[clamp(2.4rem,6vw,4.25rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-primary"
        >
          <span>
            <Text id="hero.title1">Hospedagem simples para</Text>
          </span>
          <br />
          <em className="not-italic text-accent">
            <Text id="hero.title2">bots e aplicações</Text>
          </em>
        </h1>

        <p className="mx-auto mb-10 max-w-[520px] text-[clamp(1rem,2vw,1.175rem)] leading-[1.7] text-secondary">
          <Text id="hero.subtitle">
            Infraestrutura moderna para projetos Node.js e Python. Estável, rápida e com
            suporte dedicado.
          </Text>
        </p>

        <div className="flex flex-wrap justify-center gap-[0.875rem]">
          <Button href={SITE.discord} external icon={<DiscordIcon />}>
            <Text id="hero.cta1">Entrar no Discord</Text>
          </Button>
          <Button href="/suporte" variant="ghost" icon={<LifeBuoy className="h-[15px] w-[15px]" />}>
            <Text id="hero.cta2">Abrir Suporte</Text>
          </Button>
        </div>
      </div>
    </section>
  );
}
