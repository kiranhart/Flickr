import React from 'react';
import classes from './Home.module.css';

import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

const Home = () => {
    console.log(process.env.REACT_APP_KEY);

    return <div className={classes['home-wrapper']}>
        <div className={classes.home}>
            <h1 className={classes.header}>Find your inspiration.</h1>
            <p className={classes.subheading}>
                Join the Flickr community, home to tens of billions of
                photos and 2 million groups.
            </p>
            <Button text="Explore" route="/explore" />
        </div>
        <Footer />
    </div>;
};

export default Home;