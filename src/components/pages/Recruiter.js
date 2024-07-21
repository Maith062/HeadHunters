import React from 'react';
import '../../App.css';
import RecruiterCards from '../recruiter/RecruiterCards';

export default function Recruiter() {
    return (
        <>
            <h1 className='recruiter'>Recruiters</h1>
            <RecruiterCards/>
        </>
    );
}