'use client';

import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { locales, localeConfig, defaultLocale } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';
import {
  buildRootIndexPageContext,
  type RootIndexPageContext,
} from '@/lib/i18n/root-index-context';
import { resolveSiteLocaleFromNavigatorLanguages } from '@/lib/i18n/root-index-locale';
import {
  Smartphone,
  Github,
  Languages,
  LayoutGrid,
  ArrowRight,
} from 'lucide-react';

const homepageLocaleOrder: Locale[] = [
  'en',
  'zh',
  'zh-TW',
  'ja',
  'ko',
  'es',
  'fr',
  'de',
  'pt',
  'ar',
  'it',
];

const ANDROID_PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.pdf_reader.pdf_reader';
const GITHUB_URL = 'https://github.com/pdf-reader-com/pdf-reader.com';

export function RootIndexPageClient() {
  const [ctx, setCtx] = useState<RootIndexPageContext>(() =>
    buildRootIndexPageContext(defaultLocale)
  );

  useLayoutEffect(() => {
    const langs =
      typeof navigator !== 'undefined' ? Array.from(navigator.languages) : [];
    setCtx(
      buildRootIndexPageContext(resolveSiteLocaleFromNavigatorLanguages(langs))
    );
  }, []);

  const { siteLocale, htmlLang, dir, t } = ctx;
  const toolsHref = `/${siteLocale}/tools`;

  return (
    <main
      lang={htmlLang}
      dir={dir}
      className="min-h-screen bg-background text-foreground flex flex-col items-center p-6 py-12"
    >
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{siteConfig.name}</h1>
          <p className="text-muted-foreground mt-2">{t.heroDescription}</p>
        </div>

        <div className="rounded-xl border border-primary/30 bg-muted/30 dark:bg-muted/20 px-5 py-5 sm:px-6 text-center space-y-2 shadow-sm">
          <Link
            href={toolsHref}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            <LayoutGrid className="h-5 w-5 shrink-0" aria-hidden />
            <span>{t.onlineToolsCta}</span>
            <ArrowRight className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t.onlineToolsHint}
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-center">{t.pdfReaderAppTitle}</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-3 text-start">
            <p>{t.appIntroP1}</p>
            <p>{t.appIntroP2}</p>
            <p>{t.appIntroP3}</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <a
              href={ANDROID_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Smartphone className="h-4 w-4" />
              {t.downloadAndroid}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              <Github className="h-4 w-4" />
              {t.openSource}
            </a>
          </div>
        </section>

        <section
          className="rounded-xl border-2 border-primary/40 bg-primary/5 dark:bg-primary/10 p-6 sm:p-8 space-y-5 text-center shadow-sm ring-1 ring-primary/10"
          aria-labelledby="language-choice-heading"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Languages className="h-6 w-6" aria-hidden />
            </div>
            <h2
              id="language-choice-heading"
              className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight"
            >
              {t.chooseLanguageTitle}
            </h2>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              {t.chooseLanguageHint}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center pt-1">
            {homepageLocaleOrder.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}/`}
                className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-semibold text-sm sm:text-base shadow-sm"
              >
                {localeConfig[locale]?.nativeName ?? locale}
              </Link>
            ))}
          </div>
          <Link
            href={`/${defaultLocale}/`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            {t.continueWithDefault}
          </Link>
        </section>
      </div>
    </main>
  );
}
