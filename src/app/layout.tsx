import type { Metadata } from "next";
import "./globals.css";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
    title: "Tailwind v4 Theme Starter",
    description: "Next.js App Router + Tailwind CSS v4 with @theme",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
        <body className="min-h-dvh bg-white text-dark">{children}</body>
        </html>
    );
}
