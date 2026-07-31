import {
  Code,
  Lightbulb,
  Megaphone,
  MessageSquare,
  RefreshCw,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Card, CardIcon } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const BENEFITS: { id: string; icon: LucideIcon; titlePt: string; bodyPt: string }[] = [
  {
    id: "b1",
    icon: Users,
    titlePt: "Suporte da comunidade",
    bodyPt: "Ajuda de outros usuários e da equipe diretamente no servidor.",
  },
  {
    id: "b2",
    icon: RefreshCw,
    titlePt: "Atualizações",
    bodyPt:
      "Fique por dentro de todas as novidades, melhorias e lançamentos da plataforma.",
  },
  {
    id: "b3",
    icon: Megaphone,
    titlePt: "Avisos",
    bodyPt: "Comunicados sobre manutenções, instabilidades e novas funcionalidades.",
  },
  {
    id: "b4",
    icon: Code,
    titlePt: "Ajuda técnica",
    bodyPt:
      "Canal dedicado para tirar dúvidas técnicas sobre seu projeto e deploy.",
  },
  {
    id: "b5",
    icon: Lightbulb,
    titlePt: "Sugestões",
    bodyPt: "Envie suas ideias e contribua para o desenvolvimento da plataforma.",
  },
  {
    id: "b6",
    icon: MessageSquare,
    titlePt: "Feedback",
    bodyPt: "Compartilhe sua experiência e ajude a moldar o futuro da TetrisCloud.",
  },
];

export function DiscordBenefits() {
  return (
    <Section alt aria-labelledby="benefits-title">
      <Container>
        <Reveal>
          <div className="mb-[clamp(2.5rem,4vw,3.5rem)]">
            <p className="mb-3 inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.09em] text-accent">
              <Text id="benefits.eyebrow">No servidor</Text>
            </p>
            <h2
              id="benefits-title"
              className="mb-3 font-display text-[clamp(1.65rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-primary"
            >
              <Text id="benefits.title">O que você encontra no Discord</Text>
            </h2>
            <p className="max-w-[520px] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.7] text-secondary">
              <Text id="benefits.lead">
                Nosso servidor é o centro de tudo que acontece na TetrisCloud.
              </Text>
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-[1.125rem] sm:grid-cols-2 md:grid-cols-3">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.id} delay={i + 1} className="h-full">
                <Card className="h-full">
                  <CardIcon>
                    <Icon />
                  </CardIcon>
                  <h3 className="mb-1 font-display text-[0.975rem] font-bold text-primary">
                    <Text id={`${benefit.id}.title`}>{benefit.titlePt}</Text>
                  </h3>
                  <p className="text-[0.875rem] leading-[1.68] text-secondary">
                    <Text id={`${benefit.id}.body`}>{benefit.bodyPt}</Text>
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
