import React from 'react';
import {AppBar, Badge, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import styles from './NavBar.module.css';

const NavBar = ({ favourites }) => {
    
    // create a const which lists the items in favourites as an interger to display as badgecontent.
    
    
    return (
         <Grid>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography  variant="h6" noWrap className={styles.typoStyles}>Image Searcher</Typography>
                        <div />
                        <div>
                            <IconButton aria-label="show 10 new notifications" color="inherit">
                                <Badge badgeContent={10} color="secondary">
                                    <FavoriteBorderIcon />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
         </Grid>
    );
};

export default NavBar;
