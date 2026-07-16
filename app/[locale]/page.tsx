import { PixelBackground } from "@/components/ui/PixelBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { PersonalProjects } from "@/components/sections/PersonalProjects";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PixelBackground />
      <div className="relative z-10">
        <a href="#contenido-principal" className="skip-to-main">
          {dict.common.skipToContent}
        </a>
        <SiteHeader
          locale={locale}
          dict={{ nav: dict.nav, common: dict.common }}
        />
        <main id="contenido-principal">
          <Hero dict={dict} locale={locale} />
          <About dict={dict} locale={locale} />
          <Experience dict={dict} locale={locale} />
          <Projects dict={dict} locale={locale} />
          <PersonalProjects dict={dict} />
          <Skills dict={dict} locale={locale} />
          <Contact dict={dict} locale={locale} />
        </main>
        <SiteFooter dict={dict} locale={locale} />
      </div>
    </>
  );
}
