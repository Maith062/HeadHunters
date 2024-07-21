import React from "react";
import "../../App.css";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import HeroSection from "../homepage/HeroSection";
import Cards from "../homepage/Cards";
import LanguageToggle from '../languagetoggle';


function Home() {
  return (
    // <I18nextProvider i18n={i18n}>
    <>
      <LanguageToggle />
      <HeroSection />
      <Cards />
    </>
    // </I18nextProvider>
  );
}

export default Home;
