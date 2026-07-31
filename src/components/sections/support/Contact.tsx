import { Mail, Send } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { DiscordIcon } from "@/components/ui/icons";
import { SITE } from "@/lib/site";

function SectionHeading() {
  return (
    <div className="mb-[clamp(2.5rem,4vw,3.5rem)]">
      <p className="mb-3 inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.09em] text-accent">
        <Send className="h-[11px] w-[11px]" />
        <span>
          <Text id="contact.eyebrow">Contato</Text>
        </span>
      </p>
      <h2
        id="contact-title"
        className="mb-3 font-display text-[clamp(1.65rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-primary"
      >
        <Text id="contact.title">Entre em contato</Text>
      </h2>
      <p className="max-w-[520px] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.7] text-secondary">
        <Text id="contact.lead">
          Escolha o canal mais adequado para sua dúvida ou solicitação.
        </Text>
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <Section aria-labelledby="contact-title">
      <Container narrow>
        <SectionHeading />

        <Reveal delay={1}>
          <div className="grid grid-cols-1 gap-[1.125rem] min-[641px]:grid-cols-2">
            <div className="flex flex-col gap-[0.875rem] rounded-xl border border-card-border bg-card-bg p-7 backdrop-blur-sm transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[2px] hover:border-accent-glow hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-accent-glow bg-accent-subtle text-accent">
                <DiscordIcon className="h-[18px] w-[18px]" />
              </div>
              <h3 className="font-display text-base font-bold text-primary">
                <Text id="contact.discord.title">Discord</Text>
              </h3>
              <p className="flex-1 text-[0.875rem] leading-[1.68] text-secondary">
                <Text id="contact.discord.body">
                  Suporte direto com a equipe e a comunidade. A forma mais rápida de
                  resolver qualquer questão.
                </Text>
              </p>
              <Button href={SITE.discord} external size="sm" icon={<DiscordIcon />}>
                <Text id="contact.discord.cta">Abrir Discord</Text>
              </Button>
            </div>

            <div className="flex flex-col gap-[0.875rem] rounded-xl border border-card-border bg-card-bg p-7 backdrop-blur-sm transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[2px] hover:border-accent-glow hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-accent-glow bg-accent-subtle text-accent">
                <Mail className="h-[18px] w-[18px]" />
              </div>
              <h3 className="font-display text-base font-bold text-primary">
                <Text id="contact.email.title">E-mail</Text>
              </h3>
              <p className="flex-1 text-[0.875rem] leading-[1.68] text-secondary">
                <Text id="contact.email.body">
                  Para assuntos formais ou que necessitem de acompanhamento detalhado.
                </Text>
              </p>
              <span className="font-mono text-[0.8rem] text-muted">{SITE.email}</span>
              <Button
                href={`mailto:${SITE.email}`}
                variant="ghost"
                size="sm"
                icon={<Mail className="h-3.5 w-3.5" />}
              >
                <Text id="contact.email.cta">Enviar e-mail</Text>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
