import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function RecruiterCardItem({src, title, label, name, field =[], company, contact, onClick}) {
    
      return (
        <>
          <li className='cards_item' onClick={onClick}>
            <div className='cards__item__link'>
                <figure className="cards__item__pic-wrap" data-category={label}>
                    <img src={src} alt="Travel Image" className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{name}</h5>
                    <ul>
                        <li><strong>Company:</strong> {company}</li>
                        <li><strong>Fields:</strong> {field.length > 0 ? field.join(', ') : "N/A"}</li>
                    </ul>
                </div>
            </div>
          </li>
        </>
      );
    
  
}

export default RecruiterCardItem


