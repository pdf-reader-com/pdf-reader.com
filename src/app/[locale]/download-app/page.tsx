import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { generateDownloadAppMetadata } from '@/lib/seo';
import DownloadAppPageClient from './DownloadAppPageClient';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  const t = await getTranslations({ locale: validLocale, namespace: 'metadata' });

  return generateDownloadAppMetadata(validLocale, {
    title: t('downloadApp.title'),
    description: t('downloadApp.description'),
  });
}

interface DownloadAppPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DownloadAppPage({ params }: DownloadAppPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <DownloadAppPageClient locale={locale as Locale} />;
}
