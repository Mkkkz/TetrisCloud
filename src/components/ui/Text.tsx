"use client";

import { useT } from "@/components/providers";

type TextProps = {
  id: string;
  /** Texto padrão (pt-BR) usado durante o SSR/hidratação. */
  children?: string;
};

/**
 * Renderiza o texto traduzido para o idioma selecionado.
 * Durante o servidor exibe o fallback (conteúdo) — preservando o SEO.
 */
export function Text({ id, children }: TextProps) {
  const t = useT();
  return <>{t(id, typeof children === "string" ? children : "")}</>;
}
