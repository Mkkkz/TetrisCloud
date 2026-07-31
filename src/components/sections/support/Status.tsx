import { Activity, Check } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const ITEMS = ["status.item1", "status.item2", "status.item3", "status.item4"] as const;

export function Status() {
  return (
    <Section alt aria-labelledby="status-title">
      <Container narrow>
        <div className="mb-[clamp(2.5rem,4vw,3.5rem)]">
          <p className="mb-3 inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.09em] text-accent">
            <Activity className="h-[11px] w-[11px]" />
            <span>
              <Text id="status.eyebrow">Status</Text>
            </span>
          </p>
          <h2
            id="status-title"
            className="mb-3 font-display text-[clamp(1.65rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-primary"
          >
            <Text id="status.title">Status dos serviços</Text>
          </h2>
          <p className="max-w-[520px] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.7] text-secondary">
            <Text id="status.lead">Visão geral do funcionamento da infraestrutura.</Text>
          </p>
        </div>

        <Reveal delay={1}>
          <div className="rounded-xl border border-card-border bg-card-bg p-7 backdrop-blur-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <span className="font-display text-base font-bold text-primary">
                <Text id="status.panel.title">Infraestrutura TetrisCloud</Text>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-glow bg-green-subtle px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.05em] text-green">
                <span className="h-1.5 w-1.5 animate-status-pulse rounded-full bg-green" />
                <Text id="status.panel.badge">Operacional</Text>
              </span>
            </div>

            <div className="flex flex-col gap-[0.625rem]">
              {ITEMS.map((id) => (
                <div
                  key={id}
                  className="flex items-center justify-between rounded-md border border-soft bg-subtle px-4 py-3"
                >
                  <span className="text-[0.875rem] font-medium text-secondary">
                    <Text id={id}>—</Text>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-green">
                    <Check className="h-[13px] w-[13px]" />
                    <Text id="status.ok">Operacional</Text>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
