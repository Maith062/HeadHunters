import React, {useState} from 'react';
import '../../App.css';
import NewsComponent from '../CommunityNews';

export default function Community() {
    const [skillsData, setSkillsData] = useState({});

    return (
    <>
        <h1 className='community'>Community</h1>
        <NewsComponent skillsData={skillsData} />
        </>
    );
    
}