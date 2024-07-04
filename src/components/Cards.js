import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1> Check out these  companies!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src="logo192.png"
                        text = "Expore the hidden waterfall deep"
                        label= 'Candidate'
                        path= '/candidate'
                    />
                    <CardItem
                        src="logo192.png"
                        text = "Expore the hidden waterfall deep"
                        label= 'Recruiter'
                        path= '/recruiter'
                    />
                </ul>
                <ul className="cards__items">
                <CardItem
                        src="logo192.png"
                        text = "Expore the hidden waterfall deep"
                        label= 'Community'
                        path= '/community'
                    />
                    <CardItem
                        src="logo192.png"
                        text = "Expore the hidden waterfall deep"
                        label= 'Community'
                        path= '/community'
                    />
                    <CardItem
                        src="logo192.png"
                        text = "Expore the hidden waterfall deep"
                        label= 'Community'
                        path= '/community'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
