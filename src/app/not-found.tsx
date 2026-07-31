import { Home, LifeBuoy, SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative z-[1] flex flex-1 items-center justify-center px-8 py-24 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse bg-[radial-gradient(ellipse,var(--accent-glow)_0%,transparent_68%)]"
      />

      <div className="relative z-[1] w-full max-w-[480px]">
        <div className="select-none font-display text-[clamp(5rem,15vw,9rem)] font-extrabold leading-none tracking-[-0.06em] text-accent opacity-[0.12]">
          404
        </div>

        <div className="mx-auto mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[15px] border border-accent-glow bg-accent-subtle text-accent">
          <SearchX className="h-6 w-6" />
        </div>

        <h1 className="mb-3 font-display text-[clamp(1.5rem,4vw,2rem)] font-extrabold tracking-[-0.03em] text-primary">
          Página não encontrada
        </h1>
        <p className="mx-auto mb-8 max-w-[420px] text-[0.95rem] leading-[1.7] text-secondary">
          Esta página não existe ou foi movida. Volte ao início ou acesse o suporte caso
          precise de ajuda.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" icon={<Home className="h-[14px] w-[14px]" />}>
            Voltar ao início
          </Button>
          <Button href="/suporte" variant="ghost" icon={<LifeBuoy className="h-[14px] w-[14px]" />}>
            Suporte
          </Button>
        </div>
      </div>
    </section>
  );
}
