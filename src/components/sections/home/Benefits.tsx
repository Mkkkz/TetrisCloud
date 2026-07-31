import { Eye, Globe, MousePointerClick, ShieldCheck, TrendingUp, Zap, type LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const BENEFITS: {
  id: string;
  icon: LucideIcon;
  titlePt: string;
  bodyPt: string;
}[] = [
  {
    id: "b1",
    icon: Zap,
    titlePt: "Baixa latência",
    bodyPt: "Respostas rápidas para seus usuários, onde quer que estejam.",
  },
  {
    id: "b2",
    icon: ShieldCheck,
    titlePt: "Segurança",
    bodyPt:
      "Ambientes isolados e proteção ativa para seus dados e aplicações.",
  },
  {
    id: "b3",
    icon: TrendingUp,
    titlePt: "Escalabilidade",
    bodyPt: "Cresça sem preocupação — a infraestrutura acompanha seu projeto.",
  },
  {
    id: "b4",
    icon: Eye,
    titlePt: "Monitoramento contínuo",
    bodyPt: "Seus serviços sempre sob vigilância para antecipar problemas.",
  },
  {
    id: "b5",
    icon: Globe,
    titlePt: "Alta disponibilidade",
    bodyPt: "Uptime elevado para que seus serviços nunca fiquem offline.",
  },
  {
    id: "b6",
    icon: MousePointerClick,
    titlePt: "Fácil utilização",
    bodyPt:
      "Processo intuitivo do deploy ao monitoramento, sem curva de aprendizado.",
  },
];

export function Benefits() {
  return (
    <Section alt aria-labelledby="benefits-title">
      <Container>
        <Reveal>
          <div className="mb-[clamp(2.5rem,4vw,3.5rem)]">
            <p className="mb-3 inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.09em] text-accent">
              <Text id="benefits.eyebrow">Benefícios</Text>
            </p>
            <h2
              id="benefits-title"
              className="mb-3 font-display text-[clamp(1.65rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-primary"
            >
              <Text id="benefits.title">Por que escolher a TetrisCloud?</Text>
            </h2>
            <p className="max-w-[520px] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.7] text-secondary">
              <Text id="benefits.lead">
                Performance, confiabilidade e simplicidade no mesmo lugar.
              </Text>
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 min-[700px]:grid-cols-2">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.id} delay={i + 1} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-lg border border-card-border bg-card-bg p-6 transition-all duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-accent-glow hover:shadow-sm">
                  <div className="mt-0.5 flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[8px] bg-accent-subtle text-accent [&_svg]:h-4 [&_svg]:w-4">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="mb-[0.3rem] font-display text-[0.9rem] font-bold text-primary">
                      <Text id={`benefits.${benefit.id}.title`}>{benefit.titlePt}</Text>
                    </h4>
                    <p className="text-[0.84rem] leading-[1.65] text-secondary">
                      <Text id={`benefits.${benefit.id}.body`}>{benefit.bodyPt}</Text>
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
