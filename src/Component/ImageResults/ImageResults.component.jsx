import React, {useContext} from 'react';
import styles from './ImageResults.module.css';
import { GridList, GridListTile, Card, CardMedia, IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import LinkIcon from '@material-ui/icons/Link';
import {APIContext, FavouritesContext} from "../../context/GlobalContext";

const ImageResults = () => {
    const [api, getAPI ] = useContext(APIContext);
    const [favourites, setFavourites] = useContext(FavouritesContext);
    const data = api.hits;
    
    
    const colsDef = () => {
        let finalCols = 5;
        if (window.innerWidth < 770) {
            finalCols = 1;
        }
        return finalCols;
    }
    
    const handleIconClick = item => {
        if(!favourites.includes(item)){
            const favList = [...favourites, item]
            setFavourites(favList);
        }
    }
    
    return (
        <div className={styles.container}>
            <GridList className={styles.gridList} cols={colsDef()} cellHeight={300} spacing={5}>
                {data != null ? (
                    data.map(item => {
                        return (
                            <GridListTile key={item.id} cols={1} >
                                <Card className={styles.card}>
                                    <CardMedia
                                        className={styles.image}
                                        src={item.largeImageURL}
                                        image={item.largeImageURL}
                                    />
                                    <IconButton
                                        className={styles.icon}
                                        onClick={() => handleIconClick(item.largeImageURL)}
                                        color={favourites.includes(item.largeImageURL) ? "secondary" : "inherit"}
                                    >
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton onClick={() => window.open(item.largeImageURL)}>
                                        <LinkIcon />
                                    </IconButton>
                                </Card>
                            </GridListTile>
                            )
                            })) : ' '}
            </GridList>
        </div>

    )
};

export default ImageResults;
