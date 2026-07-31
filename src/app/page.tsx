import type { Metadata } from "next";
import { DictProvider } from "@/components/providers";
import { Divider } from "@/components/ui/Container";
import { Hero } from "@/components/sections/home/Hero";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { Features } from "@/components/sections/home/Features";
import { Benefits } from "@/components/sections/home/Benefits";
import { Cta } from "@/components/sections/home/Cta";

export const metadata: Metadata = {
  title: "TetrisCloud — Hospedagem para Bots do Discord",
  description:
    "Hospedagem simples, rápida e confiável para seus bots do Discord. Ambiente estável, prático e com suporte dedicado.",
  alternates: { canonical: "https://tetriscloud.online" },
  openGraph: {
    url: "https://tetriscloud.online",
    title: "TetrisCloud — Hospedagem para Bots do Discord",
    description: "Hospedagem simples, rápida e confiável para seus bots do Discord.",
  },
};

export default function HomePage() {
  return (
    <DictProvider scope="home">
      <Hero />
      <StatsBar />
      <Features />
      <Divider />
      <Benefits />
      <Divider />
      <Cta />
    </DictProvider>
  );
}
