import { Activity, Boxes, Clock, Headphones, Rocket, Server, type LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Card, CardIcon } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const FEATURES: {
  id: string;
  icon: LucideIcon;
  titlePt: string;
  bodyPt: string;
}[] = [
  {
    id: "f1",
    icon: Rocket,
    titlePt: "Deploy rápido",
    bodyPt:
      "Coloque sua aplicação no ar em segundos. Processo direto, sem configurações desnecessárias.",
  },
  {
    id: "f2",
    icon: Clock,
    titlePt: "Runtime 24/7",
    bodyPt:
      "Bots e aplicações rodando continuamente, sem interrupções ou quedas inesperadas.",
  },
  {
    id: "f3",
    icon: Activity,
    titlePt: "Monitoramento",
    bodyPt:
      "Acompanhe status e desempenho das suas aplicações em tempo real.",
  },
  {
    id: "f4",
    icon: Boxes,
    titlePt: "Containers isolados",
    bodyPt:
      "Cada aplicação em seu próprio container, garantindo segurança e estabilidade independentes.",
  },
  {
    id: "f5",
    icon: Server,
    titlePt: "Infraestrutura estável",
    bodyPt:
      "Servidores de alta performance com redundância para máxima disponibilidade.",
  },
  {
    id: "f6",
    icon: Headphones,
    titlePt: "Suporte dedicado",
    bodyPt: "Time disponível para ajudar a qualquer momento pelo Discord.",
  },
];

export function Features() {
  return (
    <Section aria-labelledby="features-title">
      <Container>
        <Reveal>
          <div className="mb-[clamp(2.5rem,4vw,3.5rem)]">
            <p className="mb-3 inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.09em] text-accent">
              <Text id="features.eyebrow">Recursos</Text>
            </p>
            <h2
              id="features-title"
              className="mb-3 font-display text-[clamp(1.65rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-primary"
            >
              <Text id="features.title">Tudo que você precisa em um só lugar</Text>
            </h2>
            <p className="max-w-[520px] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.7] text-secondary">
              <Text id="features.lead">
                Ferramentas e infraestrutura pensadas para quem quer velocidade e
                confiabilidade.
              </Text>
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-[1.125rem] sm:grid-cols-2 md:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.id} delay={i + 1} className="h-full">
                <Card className="h-full">
                  <CardIcon>
                    <Icon />
                  </CardIcon>
                  <h3 className="mb-1 font-display text-[0.975rem] font-bold text-primary">
                    <Text id={`features.${feature.id}.title`}>{feature.titlePt}</Text>
                  </h3>
                  <p className="text-[0.875rem] leading-[1.68] text-secondary">
                    <Text id={`features.${feature.id}.body`}>{feature.bodyPt}</Text>
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
