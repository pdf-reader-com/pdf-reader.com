import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { locales, defaultLocale } from '@/lib/i18n/config';
import { rootIndexMessages } from '@/lib/i18n/root-index-messages';
import { RootIndexPageClient } from '@/components/landing/RootIndexPageClient';

const en = rootIndexMessages.en;

/**
 * 根路径静态入口页 - 解决 Google 索引问题
 * - 不重定向，可被搜索引擎索引（metadata 使用英语；页面文案在客户端按系统语言切换）
 * - 明确的 canonical 指向默认语言版本
 * - hreflang 标注各语言版本关系，避免重复页面
 */
export const metadata: Metadata = {
  title: en.metaTitle,
  description: en.metaDescription,
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
  return <RootIndexPageClient />;
}
