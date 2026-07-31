import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { Text } from "@/components/ui/Text";

const container = "mx-auto w-full max-w-[1280px] px-[clamp(1.25rem,5vw,3rem)] min-[1800px]:max-w-[1440px]";

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-soft bg-surface py-8">
      <div className={container}>
        <div className="flex flex-wrap items-start gap-5 min-[641px]:flex-row min-[641px]:items-center min-[641px]:justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="TetrisCloud">
            <Image
              src="/images/logo.png"
              alt="Logo da TetrisCloud"
              width={22}
              height={22}
              className="h-[22px] w-[22px] rounded-[5px] object-contain"
            />
            <span className="font-display text-[0.875rem] font-extrabold tracking-[-0.02em] text-primary">
              {SITE.name}
            </span>
          </Link>

          <nav aria-label="Links do rodapé" className="flex flex-wrap items-center gap-5">
            <Link
              href="/discord"
              className="text-[0.82rem] text-muted transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent"
            >
              <Text id="nav.discord">Discord</Text>
            </Link>
            <Link
              href="/suporte"
              className="text-[0.82rem] text-muted transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent"
            >
              <Text id="nav.support">Suporte</Text>
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="text-[0.82rem] text-muted transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent"
            >
              {SITE.email}
            </a>
          </nav>
        </div>

        <div className="mt-6 flex w-full flex-wrap items-center justify-between gap-4 border-t border-soft pt-5">
          <span className="text-[0.78rem] text-muted">
            <Text id="footer.copy">© 2026 TetrisCloud</Text>
          </span>
          <span className="text-[0.78rem] text-muted">
            Feito com carinho por{" "}
            <a
              href={SITE.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent"
            >
              {SITE.creditName}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
