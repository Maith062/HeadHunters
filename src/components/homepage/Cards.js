import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { useTranslation } from 'react-i18next';


function Cards() {
    const { t } = useTranslation();  // Define t using the useTranslation hook

  return (
    <div className='cards'>
      <h1> {t('heroMessage')}</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src="/photo/candidate_main_img.jpeg"
                        text = {t('candidateHome')}
                        label= {t('candidateTag')}
                        path= '/candidate'
                    />
                    <CardItem
                        src="/photo/homepage_photos/recruiter2home.jpg"
                        text = {t('recruiterHome')}
                        label= {t('recruiterTag')}
                        path= '/recruiter'
                    />
                </ul>
                <ul className="cards__items">
                <CardItem
                        src="/photo/homepage_photos/community1.jpg"
                        text = {t('community1')}
                        label= {t('community')}
                        path= '/community'
                    />
                    <CardItem
                        src="/photo/homepage_photos/community4.png"
                        text = {t('community2')}
                        label= {t('community')}
                        path= '/community'
                    />
                    <CardItem
                        src="/photo/homepage_photos/community3.jpg"
                        text = {t('community3')}
                        label= {t('community')}
                        path= '/community'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
