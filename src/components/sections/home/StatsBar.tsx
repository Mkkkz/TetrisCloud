import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

const STATS: {
  valueKey?: string;
  valueFallback?: string;
  labelKey: string;
  labelFallback: string;
}[] = [
  { valueFallback: "24/7", labelKey: "stats.uptime", labelFallback: "Runtime contínuo" },
  { valueFallback: "Node.js", labelKey: "stats.node", labelFallback: "Runtime suportado" },
  { valueFallback: "Python", labelKey: "stats.python", labelFallback: "Runtime suportado" },
  { valueKey: "stats.isolatedVal", valueFallback: "Isolado", labelKey: "stats.isolated", labelFallback: "Containers por aplicação" },
];

export function StatsBar() {
  return (
    <div aria-hidden="true" className="relative z-[1] border-y border-soft bg-subtle py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-[clamp(2rem,6vw,5rem)]">
          {STATS.map((item) => (
            <div key={item.labelKey} className="text-center">
              <div className="mb-1 font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-none tracking-[-0.03em] text-primary">
                {item.valueKey ? <Text id={item.valueKey}>{item.valueFallback}</Text> : item.valueFallback}
              </div>
              <div className="text-[0.8rem] font-medium text-muted">
                <Text id={item.labelKey}>{item.labelFallback}</Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
