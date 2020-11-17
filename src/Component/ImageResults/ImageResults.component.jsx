import React, {useContext, useState} from 'react';
import styles from './ImageResults.module.css';
import {GridList, GridListTile, Card, CardMedia, IconButton, Tooltip} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import LinkIcon from '@material-ui/icons/Link';
import {APIContext, FavouritesContext} from "../../context/GlobalContext";
import {store} from 'react-notifications-component';

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
        store.addNotification({
            title: 'Image favourited',
            message: 'Image was successfully added to your favourites list!',
            type: 'success',
            container: 'top-right',
            insert: 'top',
            dismiss: {
                duration: 5000,
            }
        })
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
                                        <Tooltip title='Favourite this image'>
                                        <FavoriteIcon />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton onClick={() => window.open(item.largeImageURL)}>
                                        <Tooltip title='Open in new tab'>
                                        <LinkIcon />
                                        </Tooltip>
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
