import { BookOpen, Clock, FileText } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

export function Docs() {
  return (
    <Section aria-labelledby="docs-title">
      <Container narrow>
        <div className="mb-[clamp(2.5rem,4vw,3.5rem)]">
          <p className="mb-3 inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.09em] text-accent">
            <BookOpen className="h-[11px] w-[11px]" />
            <span>
              <Text id="docs.eyebrow">Documentação</Text>
            </span>
          </p>
          <h2
            id="docs-title"
            className="mb-3 font-display text-[clamp(1.65rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-primary"
          >
            <Text id="docs.title">Base de conhecimento</Text>
          </h2>
        </div>

        <Reveal delay={1}>
          <div className="relative flex flex-col items-start gap-5 overflow-hidden rounded-xl border border-card-border bg-card-bg p-8 backdrop-blur-sm before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[linear-gradient(90deg,var(--accent),transparent)] min-[641px]:flex-row">
            <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent-glow bg-accent-subtle text-accent">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="mb-2 font-display text-base font-bold text-primary">
                <Text id="docs.card.title">Documentação em desenvolvimento</Text>
              </p>
              <p className="mb-4 text-[0.9rem] leading-[1.7] text-secondary">
                <Text id="docs.card.body">
                  Estamos desenvolvendo uma base de conhecimento completa com guias de
                  deploy, referência de configuração e exemplos de projetos em Node.js e
                  Python. Em breve disponibilizaremos toda a documentação para nossos
                  usuários.
                </Text>
              </p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/25 bg-amber-subtle px-2.5 py-[3px] text-[0.7rem] font-bold uppercase tracking-[0.07em] text-amber">
                <Clock className="h-[11px] w-[11px]" />
                <Text id="docs.card.badge">Em breve</Text>
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
