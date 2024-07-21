import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './languagetoggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [slide, setSlide] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
    setSlide(!slide);
  };

  return (
    <div className={`toggle-container ${slide ? 'slide' : ''}`} onClick={toggleLanguage}>
      <button className="toggle-button">
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </button>
    </div>
  );
};

export default LanguageToggle;