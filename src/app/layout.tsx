import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tetriscloud.online"),
  title: "TetrisCloud — Hospedagem para Bots do Discord",
  description:
    "Hospedagem simples, rápida e confiável para seus bots do Discord. Ambiente estável, prático e com suporte dedicado.",
  keywords: [
    "tetriscloud",
    "hospedagem",
    "bots",
    "discord",
    "discord bot",
    "nodejs",
    "python",
    "cloud hosting",
  ],
  applicationName: "TetrisCloud",
  creator: "LightBux",
  authors: [{ name: "LightBux", url: "https://lightbux.online" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://tetriscloud.online",
    siteName: "TetrisCloud",
    title: "TetrisCloud — Hospedagem para Bots do Discord",
    description:
      "Hospedagem simples, rápida e confiável para seus bots do Discord.",
    images: [
      {
        url: "/images/logo.png",
        width: 192,
        height: 192,
        alt: "TetrisCloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TetrisCloud — Hospedagem para Bots do Discord",
    description: "Hospedagem simples, rápida e confiável para seus bots do Discord.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/icons/site.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0b0f",
};

const themeInit = `(function(){try{var t=localStorage.getItem("tc-theme")||"dark";document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
