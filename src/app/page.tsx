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
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center p-6 py-12">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{siteConfig.name}</h1>
          <p className="text-muted-foreground mt-2">{siteConfig.description}</p>
        </div>

        {/* PDF Reader App Introduction (English) */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-center">PDF Reader App</h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-3 text-left">
            <p>
              PDF Reader is a fast, lightweight and privacy-friendly PDF and document reader designed for everyday use. Built with Flutter, it runs smoothly across platforms and lets you open and preview a wide range of file types, including PDF, Markdown, DOCX, PPT, XLSX and other common office document formats. Whether you need a simple PDF viewer, a convenient document reader for work, or a multi-format file viewer for study, pdf_reader helps you get to your content quickly without unnecessary clutter.
            </p>
            <p>
              With pdf_reader you can keep full control of your files. Documents are rendered locally on your device, so you can read sensitive PDFs and office files without uploading them to the cloud. The app focuses on a clean, modern interface that makes it easy to browse your files, open documents with a single tap and switch between light and dark themes for comfortable reading. Thanks to Flutter&apos;s cross-platform engine and built-in localization, pdf_reader can be adapted to multiple languages and platforms while keeping a consistent user experience.
            </p>
            <p>
              Designed as a flexible, open-source project, pdf_reader is ideal for users and developers who want a simple yet powerful PDF reader and document viewer. It works well as a daily driver for opening PDF manuals, ebooks, slides, spreadsheets and notes, or as a base for building a customized document app. If you are looking for a free, multi-format PDF reader and offline document viewer that is easy to use and easy to extend, pdf_reader is a solid choice.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <a
              href={ANDROID_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Smartphone className="h-4 w-4" />
              Download Android App
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              <Github className="h-4 w-4" />
              Open Source
            </a>
          </div>
        </section>

        <div className="space-y-4 text-center">
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
          <Link
            href={`/${defaultLocale}/`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Continue in English →
          </Link>
        </div>
      </div>
    </main>
  );
}
