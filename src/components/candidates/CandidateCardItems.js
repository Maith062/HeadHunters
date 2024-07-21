import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function CRCardItem({src, title, label, name, skills = [], education =[], experience, onClick}) {
    
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
                        <li><strong>Skills:</strong> {skills.length > 0 ? skills.join(', ') : "N/A"}</li>
                        <li><strong>Education:</strong> {education.length > 0 ? education.join(', ') : "N/A"}</li>
                        <li><strong>Experience:</strong> {experience > 0 ? experience : "N/A"}</li>
                    </ul>
                </div>
            </div>
          </li>
        </>
      );
    
  
}

export default CRCardItem


