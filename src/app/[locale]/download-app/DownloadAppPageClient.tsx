'use client';

import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';
import { Smartphone, Monitor, ExternalLink, Package } from 'lucide-react';

const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.pdf_reader.pdf_reader';
const GITHUB_RELEASES_URL = 'https://github.com/pdf-reader-com/pdf_reader/releases';

interface DownloadAppPageClientProps {
  locale: Locale;
}

export default function DownloadAppPageClient({ locale }: DownloadAppPageClientProps) {
  const t = useTranslations('downloadAppPage');
  const tCommon = useTranslations('common');

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6">
                {t('title')}
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))]">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-[hsl(var(--color-muted-foreground))]">
              <p className="mb-4">{t('intro.p1')}</p>
              <p className="mb-4">{t('intro.p2')}</p>
              <p>{t('intro.p3')}</p>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="py-16 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-10 text-center">
              {t('downloads.title')}
            </h2>
            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6" hover>
                <a
                  href={ANDROID_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--color-primary)/0.2)] transition-colors">
                    <Smartphone className="h-7 w-7 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-1">
                      {t('downloads.android')}
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {t('downloads.androidDesc')}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--color-primary))]">
                    {t('downloads.openStore')}
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </a>
              </Card>
              <Card className="p-6" hover>
                <a
                  href={GITHUB_RELEASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center group-hover:bg-[hsl(var(--color-primary)/0.2)] transition-colors">
                    <Monitor className="h-7 w-7 text-[hsl(var(--color-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-1">
                      {t('downloads.other')}
                    </h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {t('downloads.otherDesc')}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--color-primary))]">
                    <Package className="h-4 w-4" />
                    {t('downloads.viewReleases')}
                  </span>
                </a>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}
