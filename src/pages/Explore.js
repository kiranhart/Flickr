import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotosFetch } from '../redux/photoState';
import { composeImageLink } from '../utils';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

import Subnav from '../components/Subnav/Subnav';
import classes from './Explore.module.css';

const Explore = () => {
    const photos = useSelector((state) => state.photos.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotosFetch());
    }, [dispatch]);

    return <>
        <Subnav />
        <div className={classes.wrapper}>
            <h1>Explore</h1>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 5}}>
                <Masonry gutter="1rem">
                    {photos.photos && photos.photos.photo.map((photo) => {
                        return <img key={photo.id} src={composeImageLink(photo.id, photo.secret, photo.server, photo.farm)} alt="" />;
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    </>;
};

export default Explore;