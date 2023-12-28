import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Menu() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const menuStyle = {
    display: 'flex',
    flexDirection: isHome ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
  };

  const linkStyle = {
    margin: isHome ? '10px 0' : '0 10px',
    textDecoration: 'none',
    color: 'blue',
    fontSize: '1.2em',
  };

  // Determinar el archivo de currículum correcto según el idioma
  const curriculumFile = i18n.language === 'es' ? 'curriculum_es.pdf' : 'curriculum_en.pdf';

  return (
    <nav>
      <ul style={menuStyle}>
        <li><NavLink to="/" style={linkStyle}>{t('menu.home')}</NavLink></li>
        <li><NavLink to="/trabajo" style={linkStyle}>{t('menu.work')}</NavLink></li>
        <li><NavLink to="/estudio" style={linkStyle}>{t('menu.study')}</NavLink></li>
        <li><NavLink to="/sobremi" style={linkStyle}>{t('menu.aboutMe')}</NavLink></li>
        <li><NavLink to="/contacto" style={linkStyle}>{t('menu.contact')}</NavLink></li>
        <li>
          <a href={`/curriculums/${curriculumFile}`} download style={linkStyle}>
            {t('menu.downloadCV')}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;