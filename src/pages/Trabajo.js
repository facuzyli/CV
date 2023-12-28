import React from 'react';
import { useTranslation } from 'react-i18next';

function MiComponente() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('pages.work.title')}</h1>
      <p>{t('pages.work.description')}</p>
    </div>
  );
}

export default MiComponente;