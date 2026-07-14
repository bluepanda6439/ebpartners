"use client";

import { startTransition, useEffect, useState } from "react";

import { BackToTop } from "@/components/layout/back-to-top";
import { SmoothAnchorScroll } from "@/components/layout/smooth-anchor-scroll";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about";
import { AudienceFlow } from "@/components/sections/audience-flow";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { SiteFooter } from "@/components/sections/site-footer";
import {
  defaultLocale,
  getSiteCopy,
  languageOptions,
  type Locale,
} from "@/lib/i18n";

const localeStorageKey = "ebpartners:locale";

function isLocale(value: string | null): value is Locale {
  return languageOptions.some((option) => option.code === value);
}

export function SiteShell() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const copy = getSiteCopy(locale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);

    if (isLocale(storedLocale)) {
      const frame = window.requestAnimationFrame(() => {
        startTransition(() => {
          setLocale(storedLocale);
        });
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        copy={copy.header}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <main>
        <HeroSection copy={copy.hero} />
        <AudienceFlow copy={copy} />
        <AboutSection copy={copy.about} />
        <FinalCtaSection copy={copy.contact} />
      </main>
      <SmoothAnchorScroll />
      <BackToTop />
      <SiteFooter />
    </div>
  );
}
