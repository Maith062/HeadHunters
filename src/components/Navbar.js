import React , {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

import {Button} from './Button';

import './Navbar.css';

import { useTranslation } from 'react-i18next';


// import Logo from './public/pied-piper-hat.svg';


function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { t } = useTranslation();  // Define t using the useTranslation hook


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //displays based on screensize (toggle based on screensize)
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        HeadHunters <FontAwesomeIcon icon={faCoffee}/>                  
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                {t('home')}
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/candidate' className='nav-links' onClick={closeMobileMenu}>
                                {t('candidates')}
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/recruiter' className='nav-links' onClick={closeMobileMenu}>
                                {t('recruiters')}
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                                {t('community')}
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                {t('createAccount')}
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>{t('createAccount')}</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;

