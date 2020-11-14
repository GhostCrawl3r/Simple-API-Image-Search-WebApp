import React from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import styles from './NavBar.module.css';

const NavBar = ({ favourites }) => {
    
    // const notificationNum = favourites.length;
    
    
    return (
            <div >
                <AppBar className={styles.appBar} color='inherit'>
                    <Toolbar>
                        <Typography  variant="h6" noWrap>Image Searcher</Typography>
                        <div />
                        <div className={styles.container}>
                            <IconButton aria-label="show 10 new notifications" color="inherit">
                                <Badge badgeContent={10} color="secondary">
                                    <FavoriteBorderIcon />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
    );
};

export default NavBar;
