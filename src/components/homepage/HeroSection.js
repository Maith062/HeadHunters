import React from "react";
import { Button } from "../Button";
import "./HeroSection.css";
import "../../App.css";
import { useTranslation } from 'react-i18next';

import LanguageToggle from '../languagetoggle';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';




function HeroSection() {

  const { t } = useTranslation();  // Define t using the useTranslation hook

  return (

    <I18nextProvider i18n={i18n}>

    <div className="hero-container">

      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>{t('mainMessage')}</h1>
      <p>{t('subMessage')}</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          destination="/candidate"
        >
          {t('candidateTag')}
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          destination="/recruiter"
        >
          {t('recruiterTag')}
          </Button>
      </div>
    </div>
    </I18nextProvider>


  );
}

export default HeroSection;
