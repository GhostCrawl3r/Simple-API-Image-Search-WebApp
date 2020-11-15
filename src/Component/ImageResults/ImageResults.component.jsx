import React, { useEffect } from 'react';
import styles from './ImageResults.module.css';
import {GridList, GridListTile} from "@material-ui/core";

const ImageResults = ({results}) => {
    const data = results.hits;
    
    const colsDef = () => {
        let finalCols = 5;
        if (window.innerWidth < 770) {
            finalCols = 1;
        }
        return finalCols;
    }
    
    return (
        <div className={styles.container}>
            <GridList className={styles.gridList} cols={colsDef()} cellHeight={300} spacing={5}>
                {data != null ? (
                    data.map(item => (
                        <GridListTile key={item.id} cols={1} >
                            <img src={item.largeImageURL} alt={item.user} onClick={() => window.open(item.largeImageURL)} className={styles.image}/>
                        </GridListTile>
                    ))) : ' '}
            </GridList>
        </div>
    )
};

export default ImageResults;
