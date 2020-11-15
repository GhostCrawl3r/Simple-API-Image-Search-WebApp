import React from 'react';
import styles from './Favourites.modules.css';
import { Typography } from "@material-ui/core";


const FavouriteCOMP = () => {
    return (
        <div className={styles.container}>
            <br/>
            <Typography variant='h3' className={styles.title}>Favourites</Typography>
            {/*Add the favourites list here*/}
            
        </div>
    );
};

export default FavouriteCOMP;
