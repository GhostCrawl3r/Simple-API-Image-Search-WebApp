import React, {useContext, useState} from 'react';
import {AppBar, Badge, Grid, IconButton, Toolbar, Typography, Snackbar} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MuiAlert from '@material-ui/lab/Alert';

import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { FavouritesContext } from "../../context/GlobalContext";

const NavBar = () => {
    
    const [favourites, setFavourites] = useContext(FavouritesContext);
    
    
    return (
         <Grid container item xs={12}>
                <AppBar position='fixed'>
                    <Toolbar>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white', flex: '1'}}>
                        <Typography  variant="h6" noWrap className={styles.typoStyles}>Imager-Nation</Typography>
                        </Link>
                        <div />
                        <div>
                        <Link to='/favourites' style={{ textDecoration: 'none', color: 'white'}}>
                            <IconButton aria-label="show 10 new notifications" color="inherit">
                                <Badge badgeContent={favourites.length} color="secondary">
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
