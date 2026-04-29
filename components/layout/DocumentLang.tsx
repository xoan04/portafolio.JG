"use client";

import { useEffect } from "react";

export function DocumentLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "es";
  }, [locale]);
  return null;
}
