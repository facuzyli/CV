import React from 'react';
import { useLocalization } from '../LocalizationContext';

const LanguageSelector = () => {
  const { setLanguage } = useLocalization();

  return (
    <select onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageSelector;
