import { DocumentLang } from "@/components/layout/DocumentLang";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return { title: "Portfolio" };
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: locale === "es" ? "es_CO" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  return (
    <>
      <DocumentLang locale={raw} />
      {children}
    </>
  );
}
