import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StoreHydration } from "@/store/StoreHydration";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naruto 5e — Fichas",
  description: "Criação de fichas e jutsus para o sistema Naruto 5e (Manual Shinobi).",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Aplica o tema salvo antes da hidratação, evitando flash do tema errado (FOUC). */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <StoreHydration />
        {children}
      </body>
    </html>
  );
}
