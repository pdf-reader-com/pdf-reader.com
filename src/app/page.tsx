import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { locales, localeConfig, defaultLocale } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';

/**
 * 根路径静态入口页 - 解决 Google 索引问题
 * - 不重定向，可被搜索引擎索引
 * - 明确的 canonical 指向默认语言版本
 * - hreflang 标注各语言版本关系，避免重复页面
 */
export const metadata: Metadata = {
  title: `${siteConfig.name} - Professional online PDF tools and Android reader`,
  description: siteConfig.description,
  alternates: {
    canonical: `${siteConfig.url}/${defaultLocale}/`,
    languages: {
      ...Object.fromEntries(
        locales.map((locale) => [locale, `${siteConfig.url}/${locale}/`])
      ),
      'x-default': `${siteConfig.url}/${defaultLocale}/`,
    } as Record<string, string>,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootIndexPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-3xl font-bold">{siteConfig.name}</h1>
        <p className="text-muted-foreground">{siteConfig.description}</p>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">选择您的语言 / Choose your language:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}/`}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
              >
                {localeConfig[locale as Locale]?.nativeName ?? locale}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href={`/${defaultLocale}/`}
          className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Continue in English →
        </Link>
      </div>
    </main>
  );
}
