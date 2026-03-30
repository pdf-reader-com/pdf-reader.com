import { describe, expect, it } from 'vitest';
import {
  resolveRootIndexUiLocale,
  resolveSiteLocaleFromAcceptLanguage,
  resolveSiteLocaleFromOrderedTags,
} from '@/lib/i18n/root-index-locale';

describe('root-index-locale', () => {
  it('maps ordered tags to site locale', () => {
    expect(resolveSiteLocaleFromOrderedTags(['zh-CN', 'en'])).toBe('zh');
    expect(resolveSiteLocaleFromOrderedTags(['zh-TW', 'en'])).toBe('zh-TW');
    expect(resolveSiteLocaleFromOrderedTags(['ja'])).toBe('ja');
    expect(resolveSiteLocaleFromOrderedTags(['it-IT'])).toBe('it');
  });

  it('falls back to English when no tag matches', () => {
    expect(resolveSiteLocaleFromOrderedTags([])).toBe('en');
    expect(resolveSiteLocaleFromOrderedTags(['xx-YY'])).toBe('en');
  });

  it('parses Accept-Language with quality values', () => {
    expect(resolveSiteLocaleFromAcceptLanguage('de, en;q=0.8')).toBe('de');
    expect(resolveSiteLocaleFromAcceptLanguage('en;q=0.5, fr;q=0.9')).toBe('fr');
  });

  it('maps Italian site locale to English UI pack', () => {
    expect(resolveRootIndexUiLocale('it')).toBe('en');
    expect(resolveRootIndexUiLocale('zh')).toBe('zh');
  });
});
