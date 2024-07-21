import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
  return (
    <>
    <li className='cards_item'>
        <Link className='cards__item__link' to={props.path}> {/*Essentially what this line does is take the path from Cards, and past it to the Card Item */}
            <figure className="cards__item__pic-wrap" data-category={props.label}>
                <img src={props.src} alt="Travel Image"
                className="cards__item__img"/>
            </figure>
            <div className="cards__item__info">
                <h5 className="cards__item__text">{props.text}</h5>
            </div>
        </Link>
    </li>
    </>
  )
}

export default CardItem
