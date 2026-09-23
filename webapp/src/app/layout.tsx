import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StoreHydration } from "@/store/StoreHydration";
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
        <StoreHydration />
        {children}
      </body>
    </html>
  );
}
