import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Subnav.module.css';


const Subnav = () => {
    return (
        <div className={classes.subnav}>
            <NavLink to="/explore" className={(data) => data.isActive ? classes.active : ''}>Explore</NavLink>
            <NavLink to="/" className={(data) => data.isActive ? classes.active : ''}>Trending</NavLink>
            <NavLink to="/" className={(data) => data.isActive ? classes.active : ''}>Events</NavLink>
        </div>
    );
};

export default Subnav;