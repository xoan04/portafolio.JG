import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Juan José Gómez Sánchez",
    template: "%s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${display.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
