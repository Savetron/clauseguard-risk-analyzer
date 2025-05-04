
import React, { createContext, useState, useContext, ReactNode } from 'react';
import enTranslations from '../locales/en.json';
import trTranslations from '../locales/tr.json';

type Locale = 'en' | 'tr';
type Translations = typeof enTranslations;

interface I18nContextType {
  locale: Locale;
  t: (key: string) => string;
  changeLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('tr');
  const [translations, setTranslations] = useState<Translations>(trTranslations);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    setTranslations(newLocale === 'en' ? enTranslations : trTranslations);
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    if (typeof value === 'string') {
      return value;
    }

    console.warn(`Translation value is not a string: ${key}`);
    return key;
  };

  return (
    <I18nContext.Provider value={{ locale, t, changeLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
