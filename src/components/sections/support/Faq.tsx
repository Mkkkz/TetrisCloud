"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Text } from "@/components/ui/Text";

const QUESTIONS = ["q1", "q2", "q3", "q4", "q5"] as const;

export function Faq() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section alt aria-labelledby="faq-title">
      <Container narrow>
        <div className="mb-[clamp(2.5rem,4vw,3.5rem)]">
          <p className="mb-3 inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.09em] text-accent">
            <HelpCircle className="h-[11px] w-[11px]" />
            <span>
              <Text id="faq.eyebrow">FAQ</Text>
            </span>
          </p>
          <h2
            id="faq-title"
            className="mb-3 font-display text-[clamp(1.65rem,3.2vw,2.4rem)] font-extrabold leading-[1.15] tracking-[-0.03em] text-primary"
          >
            <Text id="faq.title">Perguntas frequentes</Text>
          </h2>
          <p className="max-w-[520px] text-[clamp(0.95rem,1.5vw,1.05rem)] leading-[1.7] text-secondary">
            <Text id="faq.lead">Respostas para as dúvidas mais comuns.</Text>
          </p>
        </div>

        <Reveal>
          <div className="flex flex-col gap-2" role="list">
            {QUESTIONS.map((id) => {
              const isOpen = open === id;
              return (
                <div
                  key={id}
                  className={`overflow-hidden rounded-lg border border-card-border bg-card-bg transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? "border-accent-glow" : ""
                  }`}
                  role="listitem"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : id)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-[1.375rem] py-[1.125rem] text-left font-display text-[0.925rem] font-bold text-primary transition-colors duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent"
                  >
                    <Text id={`faq.${id}.q`}>Pergunta</Text>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted transition-transform duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-soft px-[1.375rem] py-4 text-[0.875rem] leading-[1.72] text-secondary">
                        <Text id={`faq.${id}.a`}>Resposta</Text>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
