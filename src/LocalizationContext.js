import React, { createContext, useState, useContext, useEffect } from 'react';
import en from './l10n/en.json';
import es from './l10n/es.json';

const translations = { en, es };
const LocalizationContext = createContext();

export const useLocalization = () => useContext(LocalizationContext);

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translation, setTranslation] = useState(translations[language]);

  useEffect(() => {
    setTranslation(translations[language]);
  }, [language]);

  const t = (key) => {
    // Asegúrate de que estás accediendo a las traducciones correctamente.
    const keys = key.split('.');
    let value = translation;
    for (let k of keys) {
      value = value[k];
      if (!value) break;
    }
    return value || key;
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};
