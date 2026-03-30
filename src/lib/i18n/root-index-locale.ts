import {
  defaultLocale,
  isValidLocale,
  localeConfig,
  type Locale,
} from '@/lib/i18n/config';

/** 首页完整翻译包所覆盖的 10 种主流语言（未命中时文案回退为英语） */
export const rootIndexUiLocales = [
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
] as const;

export type RootIndexUiLocale = (typeof rootIndexUiLocales)[number];

const uiLocaleSet = new Set<string>(rootIndexUiLocales);

export function isRootIndexUiLocale(locale: string): locale is RootIndexUiLocale {
  return uiLocaleSet.has(locale);
}

/**
 * 将站点 Locale 映射到首页 UI 文案语言（意大利语等仅站内路由有翻译时，首页仍用英语文案）
 */
export function resolveRootIndexUiLocale(siteLocale: Locale): RootIndexUiLocale {
  return isRootIndexUiLocale(siteLocale) ? siteLocale : 'en';
}

function matchLocaleTag(tag: string): Locale | null {
  const n = tag.toLowerCase().replace(/_/g, '-');

  if (
    n === 'zh-tw' ||
    n === 'zh-hk' ||
    n === 'zh-mo' ||
    n === 'zh-hant' ||
    n.startsWith('zh-hant')
  ) {
    return 'zh-TW';
  }
  if (
    n === 'zh-cn' ||
    n === 'zh-hans' ||
    n.startsWith('zh-hans') ||
    n === 'zh-sg'
  ) {
    return 'zh';
  }
  if (n === 'zh') return 'zh';

  if (n.startsWith('pt')) return 'pt';
  if (n.startsWith('en')) return 'en';
  if (n.startsWith('ja')) return 'ja';
  if (n.startsWith('ko')) return 'ko';
  if (n.startsWith('es')) return 'es';
  if (n.startsWith('fr')) return 'fr';
  if (n.startsWith('de')) return 'de';
  if (n.startsWith('ar')) return 'ar';
  if (n.startsWith('it')) return 'it';

  const primary = n.split('-')[0];
  if (primary && isValidLocale(primary)) return primary;

  return null;
}

function parseAcceptLanguageTags(header: string): string[] {
  return header
    .split(',')
    .map((part) => {
      const semicolon = part.indexOf(';');
      const raw = (semicolon === -1 ? part : part.slice(0, semicolon)).trim();
      const tag = raw.replace(/_/g, '-');
      let q = 1;
      if (semicolon !== -1) {
        const qMatch = /q\s*=\s*([\d.]+)/i.exec(part.slice(semicolon + 1));
        if (qMatch) q = parseFloat(qMatch[1]) || 0;
      }
      return { tag, q };
    })
    .sort((a, b) => b.q - a.q)
    .map(({ tag }) => tag);
}

/**
 * 按优先级遍历 BCP 47 标签（如 navigator.languages 或 Accept-Language 解析结果），
 * 返回首个匹配的站点语言；无匹配时返回英语
 */
export function resolveSiteLocaleFromOrderedTags(
  tags: readonly string[] | undefined
): Locale {
  if (!tags?.length) return defaultLocale;
  for (const raw of tags) {
    const matched = matchLocaleTag(raw.trim());
    if (matched) return matched;
  }
  return defaultLocale;
}

/**
 * 根据 Accept-Language 解析首选站点语言（用于服务端场景；静态导出不使用）
 */
export function resolveSiteLocaleFromAcceptLanguage(
  header: string | null | undefined
): Locale {
  if (!header?.trim()) return defaultLocale;
  return resolveSiteLocaleFromOrderedTags(parseAcceptLanguageTags(header));
}

/**
 * 根据浏览器 navigator.languages 解析首选站点语言（静态导出首页使用）
 */
export function resolveSiteLocaleFromNavigatorLanguages(
  langs: readonly string[] | undefined
): Locale {
  return resolveSiteLocaleFromOrderedTags(langs);
}

const htmlLangByUi: Record<RootIndexUiLocale, string> = {
  en: 'en',
  zh: 'zh-Hans',
  'zh-TW': 'zh-Hant',
  ja: 'ja',
  ko: 'ko',
  es: 'es',
  fr: 'fr',
  de: 'de',
  pt: 'pt',
  ar: 'ar',
};

export function rootIndexHtmlLang(ui: RootIndexUiLocale): string {
  return htmlLangByUi[ui];
}

export function rootIndexTextDirection(ui: RootIndexUiLocale): 'ltr' | 'rtl' {
  return localeConfig[ui].direction;
}
