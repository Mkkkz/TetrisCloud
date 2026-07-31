import type { Metadata } from "next";
import { DictProvider } from "@/components/providers";
import { Divider } from "@/components/ui/Container";
import { DiscordHero } from "@/components/sections/discord/Hero";
import { DiscordBenefits } from "@/components/sections/discord/Benefits";

export const metadata: Metadata = {
  title: "Discord — TetrisCloud",
  description:
    "Entre no Discord da TetrisCloud para suporte, atualizações e comunidade.",
  alternates: { canonical: "https://tetriscloud.online/discord" },
  openGraph: {
    url: "https://tetriscloud.online/discord",
    title: "Discord — TetrisCloud",
    description: "Entre no Discord da TetrisCloud para suporte e comunidade.",
  },
};

export default function DiscordPage() {
  return (
    <DictProvider scope="discord">
      <DiscordHero />
      <Divider />
      <DiscordBenefits />
    </DictProvider>
  );
}
