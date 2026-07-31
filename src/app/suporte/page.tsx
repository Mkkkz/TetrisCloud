import type { Metadata } from "next";
import { DictProvider } from "@/components/providers";
import { Divider } from "@/components/ui/Container";
import { SupportHero } from "@/components/sections/support/Hero";
import { Contact } from "@/components/sections/support/Contact";
import { Status } from "@/components/sections/support/Status";
import { Docs } from "@/components/sections/support/Docs";
import { Faq } from "@/components/sections/support/Faq";

export const metadata: Metadata = {
  title: "Suporte — TetrisCloud",
  description:
    "Central de suporte da TetrisCloud. Contato, Discord, status e perguntas frequentes.",
  alternates: { canonical: "https://tetriscloud.online/suporte" },
  openGraph: {
    url: "https://tetriscloud.online/suporte",
    title: "Suporte — TetrisCloud",
    description: "Central de suporte da TetrisCloud.",
  },
};

export default function SupportPage() {
  return (
    <DictProvider scope="support">
      <SupportHero />
      <Divider />
      <Contact />
      <Divider />
      <Status />
      <Divider />
      <Docs />
      <Divider />
      <Faq />
    </DictProvider>
  );
}
