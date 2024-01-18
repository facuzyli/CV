import React from 'react';
import { useLocalization } from '../LocalizationContext';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const { t } = useLocalization();

  return (
    <div className='menucontenedor'>
      <ul>
        
        <li>
          <Link to="/trabajo">
            {t('menu.work')}
            <span className="hover-text">{t('menu.work')}</span>
          </Link>
        </li>
        <li>
          <Link to="/estudios">
            {t('menu.study')}
            <span className="hover-text">{t('menu.study')}</span>
          </Link>
        </li>
        <li>
          <Link to="/sobremi">
            {t('menu.aboutMe')}
            <span className="hover-text">{t('menu.aboutMe')}</span>
          </Link>
        </li>
        <li>
          <Link to="/contacto">
            {t('menu.contact')}
            <span className="hover-text">{t('menu.contact')}</span>
          </Link>
        </li>
        <li>
          <Link to="/curriculum">
            {t('menu.curriculum')}
            <span className="hover-text">{t('menu.curriculum')}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
