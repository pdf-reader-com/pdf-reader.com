import type { Locale } from '@/lib/i18n/config';
import {
  resolveRootIndexUiLocale,
  rootIndexHtmlLang,
  rootIndexTextDirection,
  type RootIndexUiLocale,
} from '@/lib/i18n/root-index-locale';
import { rootIndexMessages, type RootIndexMessages } from '@/lib/i18n/root-index-messages';

export type RootIndexPageContext = {
  siteLocale: Locale;
  uiLocale: RootIndexUiLocale;
  htmlLang: string;
  dir: 'ltr' | 'rtl';
  t: RootIndexMessages;
};

export function buildRootIndexPageContext(siteLocale: Locale): RootIndexPageContext {
  const uiLocale = resolveRootIndexUiLocale(siteLocale);
  return {
    siteLocale,
    uiLocale,
    htmlLang: rootIndexHtmlLang(uiLocale),
    dir: rootIndexTextDirection(uiLocale),
    t: rootIndexMessages[uiLocale],
  };
}
