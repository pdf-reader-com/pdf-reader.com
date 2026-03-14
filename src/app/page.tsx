import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { locales, localeConfig, defaultLocale } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';
import { Smartphone, Github } from 'lucide-react';

// 首页语言选择器显示顺序：英语 → 简体中文 → 繁體中文 → 日语 → 其他
const homepageLocaleOrder: Locale[] = ['en', 'zh', 'zh-TW', 'ja', 'ko', 'es', 'fr', 'de', 'pt', 'ar', 'it'];

const ANDROID_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.pdf_reader.pdf_reader';
const GITHUB_URL = 'https://github.com/pdf-reader-com/pdf-reader.com';

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
            {homepageLocaleOrder.map((locale) => (
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

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={`/${defaultLocale}/`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Continue in English →
          </Link>
          <a
            href={ANDROID_PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
          >
            <Smartphone className="h-5 w-5" />
            Download Android App
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
          >
            <Github className="h-5 w-5" />
            Open Source
          </a>
        </div>
      </div>
    </main>
  );
}
