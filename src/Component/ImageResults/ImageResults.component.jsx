import React, { useState } from 'react';
import styles from './ImageResults.module.css';
import { GridList, GridListTile, Card, CardMedia, IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LinkIcon from '@material-ui/icons/Link';

const ImageResults = ({results}) => {
    const [click, setClick] = useState(false);
    const data = results.hits;
    
    const colsDef = () => {
        let finalCols = 5;
        if (window.innerWidth < 770) {
            finalCols = 1;
        }
        return finalCols;
    }
    
    const handleIconClick = () => {
        setClick(!click);
    }
    
    return (
        <div className={styles.container}>
            <GridList className={styles.gridList} cols={colsDef()} cellHeight={300} spacing={5}>
                {data != null ? (
                    data.map(item => (
                                <GridListTile key={item.id} cols={1} >
                                    <Card className={styles.card}>
                                        <CardMedia
                                            className={styles.image}
                                            src={item.largeImageURL}
                                            image={item.largeImageURL}
                                        />
                                        <IconButton className={styles.icon} onClick={handleIconClick}>
                                            {!click
                                                ? <FavoriteBorderOutlinedIcon />
                                                :   <FavoriteIcon />
                                            }
                                        </IconButton>
                                        <IconButton onClick={() => window.open(item.largeImageURL)}>
                                            <LinkIcon />
                                        </IconButton>
                                    </Card>
                                </GridListTile>
                    ))) : ' '}
            </GridList>
        </div>

    )
};

export default ImageResults;
