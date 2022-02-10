import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Button.module.css';

const Button = ({text, styles, route}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <button onClick={handleClick} className={classes.button} styles={styles}>
            {text}
        </button>
    );
};

export default Button;