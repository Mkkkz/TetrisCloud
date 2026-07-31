import { LifeBuoy } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { DiscordIcon } from "@/components/ui/icons";
import { SITE } from "@/lib/site";

export function Cta() {
  return (
    <Section aria-labelledby="cta-title">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-card-border bg-card-bg px-8 py-[clamp(3rem,5vw,4.5rem)] text-center backdrop-blur-xl before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[30%] left-1/2 h-[60%] w-[50%] -translate-x-1/2 bg-[radial-gradient(ellipse,var(--accent-glow)_0%,transparent_70%)]"
            />

            <h2
              id="cta-title"
              className="relative mb-[0.875rem] font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-[-0.035em] text-primary"
            >
              <Text id="cta.title">Pronto para começar?</Text>
            </h2>
            <p className="relative mx-auto mb-8 max-w-[420px] text-[1.025rem] text-secondary">
              <Text id="cta.body">
                Junte-se à comunidade e hospede seus projetos com qualidade e
                estabilidade.
              </Text>
            </p>

            <div className="relative flex flex-wrap justify-center gap-[0.875rem]">
              <Button href={SITE.discord} external icon={<DiscordIcon />}>
                <Text id="cta.cta1">Entrar no Discord</Text>
              </Button>
              <Button href="/suporte" variant="ghost" icon={<LifeBuoy className="h-[15px] w-[15px]" />}>
                <Text id="cta.cta2">Suporte</Text>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
