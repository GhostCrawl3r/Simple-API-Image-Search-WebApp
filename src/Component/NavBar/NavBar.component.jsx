import React from 'react';
import {AppBar, Badge, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({ favourites }) => {
    
    // create a const which lists the items in favourites as an interger to display as badgecontent.
    
    
    return (
         <Grid container item xs={12}>
                <AppBar position='static'>
                    <Toolbar>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white', flex: '1'}}>
                        <Typography  variant="h6" noWrap className={styles.typoStyles}>Imager-Nation</Typography>
                        </Link>
                        <div />
                        <div>
                        <Link to='/favourites' style={{ textDecoration: 'none', color: 'white'}}>
                            <IconButton aria-label="show 10 new notifications" color="inherit">
                                <Badge badgeContent={10} color="secondary">
                                    <FavoriteBorderIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                        </div>
                    </Toolbar>
                </AppBar>
         </Grid>
    );
};

export default NavBar;
