import React from 'react';
import classes from './Footer.module.css';

import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { IoLogoInstagram } from 'react-icons/io';

import { FooterOptions } from '../../data';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <ul className={classes['footer-main']}>
                {FooterOptions.map((option, index) => {
                    return <li key={option + index}>{option}</li>;
                })}
            </ul>
            <hr className={classes.hr} />
            <div className={classes['footer-sub']}>
                <ul>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Cookies</li>
                </ul>
                <p>SmugMug+Flickr. Connecting people through photography</p>
                <ul>
                    <li>
                        <AiFillFacebook />
                    </li>
                    <li>
                        <AiOutlineTwitter />
                    </li>
                    <li>
                        <IoLogoInstagram />
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;