import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted/>
      <h1>Searching for the perfect opportunity?</h1>
      <p>Find your dream job/candidate today!</p>
      <div className='hero-btns'>

        <Button className="btns" buttonStyle='btn--outline'
        buttonSize='btn--large'>Candidate</Button>
        
        <Button className="btns" buttonStyle='btn--primary'
        buttonSize='btn--large'>Recruiter</Button>

      </div>
    </div>
  );
}

export default HeroSection;
