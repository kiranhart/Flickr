import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';

import flicker from '../../icons/flicker-dots.svg';

const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <nav className={`${classes.navbar} ${pathname !== '/' ? classes.dark : ''}`}>
            { pathname === '/' && <>
                <div className={classes.logo} onClick={handleClick}>
                    <img src={flicker} alt="flicker dots" />
                    <h3>flickr</h3>
                </div>
                <div className={classes.search}>
                    <input type="text" placeholder='Photos, people, or groups' />
                </div>
                <div className={classes.account}>
                    <button className={classes['button-clear']}>Login</button>
                    <button className={classes['button-white']}>Sign Up</button>
                </div>
            </>}

            { pathname !== '/' && <>
                <div className={classes.logo} onClick={handleClick}>
                    <img src={flicker} alt="flicker dots" />
                    <h3>flickr</h3>
                    <ul>
                        <li>Explore</li>
                        <li>Prints</li>
                    </ul>
                </div>
                <div className={classes.miniSearch}>
                    <div className={classes.search}>
                        <input type="text" placeholder='Photos, people, or groups' />
                    </div>
                    <button className={classes['button-clear']}>Login</button>
                    <button className={classes['button-white']}>Sign Up</button>
                </div>
            </>}
        </nav>
    );
};

export default Navbar;