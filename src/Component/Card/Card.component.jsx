import React from 'react';
import styles from './Card.module.css';
import {GridListTile} from "@material-ui/core";

const Card = ({item}) => {
    
    return (
        <GridListTile key={item.id} cols={item.cols || 1}>
            <img src={item.largeImageURL} alt={item.user} />
        </GridListTile>
    )

};

export default Card;
