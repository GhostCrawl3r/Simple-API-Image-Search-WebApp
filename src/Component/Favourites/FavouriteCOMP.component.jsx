import React, {useContext} from 'react';
import styles from './FavouriteCOMP.modules.css';
import {Typography} from "@material-ui/core";
import {FavouritesContext} from "../../context/GlobalContext";
import { GridList, GridListTile} from "@material-ui/core";


const FavouriteCOMP = () => {
    const [favourites, setFavourites] = useContext(FavouritesContext);
    
    const colsDef = () => {
        let finalCols = 5;
        if (window.innerWidth < 770) {
            finalCols = 1;
        }
        return finalCols;
    }
    
    
    const handleClick = e => {
        const newARR = [...favourites].filter(item => item !== e);
        setFavourites(newARR);
    }
    
    return (
        <div className={styles.container}>
            <br/><br/><br/><br/>
            <div className={styles.title}>
                <Typography variant='h3'>Favourites</Typography>
                <Typography variant='subtitle1'>Click on an image to remove it from your favourites.</Typography>
            </div>
            <br/>
                <GridList className={styles.gridList} cols={colsDef()} cellHeight={300} spacing={5}>
                    {favourites.length ? (
                        favourites.map(item => {
                            return (
                                <GridListTile key={Math.floor(Math.random() * 1000000)}>
                                    <img src={item} alt='favourited' onClick={() => handleClick(item)} className={styles.image} />
                                </GridListTile>
                            )
                        })) : (
                            <Typography variant="body1">Nothing added yet! </Typography>
                    )}
                </GridList>
            </div>
    );
};

export default FavouriteCOMP;
