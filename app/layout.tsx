import type { Metadata } from "next";
import { Geist, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const pixel = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      data-scroll-behavior="smooth"
      className={`${body.variable} ${pixel.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-text">{children}</body>
    </html>
  );
}
