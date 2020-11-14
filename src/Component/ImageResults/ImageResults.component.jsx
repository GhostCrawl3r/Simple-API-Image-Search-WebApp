import React from 'react';
import styles from './ImageResults.module.css';
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile} from "@material-ui/core";

import Card from "../Card/Card.component";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 1500,
        height: 700,
    },
}));

const ImageResults = ({results}) => {
    const classes = useStyles();
    const data = results.hits;
    
    const colsDef = () => {
        let finalCols = 5;
        
        if(window.innerWidth < 770) {
            finalCols = 1;
        }
        
        return finalCols;
    }
    
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={colsDef()} cellHeight={500} spacing={5}>
                {data != null ? (
                    data.map(item => (
                        <GridListTile key={item.id} cols={1} >
                            <img src={item.largeImageURL} alt={item.user} onClick={() => window.open(item.largeImageURL)}/>
                        </GridListTile>
                    ))) : ' '}
            </GridList>
        </div>
    )
};

export default ImageResults;
