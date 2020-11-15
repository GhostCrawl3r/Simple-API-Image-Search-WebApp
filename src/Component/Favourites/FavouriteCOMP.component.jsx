import React, {useContext} from 'react';
import styles from './FavouriteCOMP.modules.css';
import {IconButton, Typography} from "@material-ui/core";
import {FavouritesContext} from "../../context/GlobalContext";
import { GridList, GridListTile, Card, CardMedia } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


const FavouriteCOMP = () => {
    const [favourites, setFavourites] = useContext(FavouritesContext);
    
    const colsDef = () => {
        let finalCols = 5;
        if (window.innerWidth < 770) {
            finalCols = 1;
        }
        return finalCols;
    }
    console.log(favourites);
    
    return (
        <div className={styles.container}>
            <br/>
            <Typography variant='h3' className={styles.title}>Favourites</Typography>
            <br/>
                <GridList className={styles.gridList} cols={colsDef()} cellHeight={300} spacing={5}>
                    {favourites.length ? (
                        favourites.map(item => {
                            return (
                                <GridListTile key={Math.floor(Math.random() * 1000000)}>
                                    <Card elevation={3}>
                                        <CardMedia
                                            className={styles.image}
                                            image={item}
                                            src={item}
                                            />
                                        <IconButton className={styles.icon}>
                                            <DeleteIcon color="secondary"/>
                                        </IconButton>
                                    </Card>
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
