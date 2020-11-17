import React, {useContext} from 'react';
import {AppBar, Badge, Grid, IconButton, Toolbar, Typography, Tooltip} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
                        <Tooltip title='Home'>
                        <Typography  variant="h6" noWrap className={styles.typoStyles}>Imager-Nation</Typography>
                        </Tooltip>
                        </Link>
                        <div />
                        <div>
                        <Link to='/favourites' style={{ textDecoration: 'none', color: 'white'}}>
                            <IconButton aria-label="show 10 new notifications" color="inherit">
                                <Badge badgeContent={favourites.length} color="secondary">
                                    <Tooltip title='Your favourites list'>
                                    <FavoriteBorderIcon />
                                    </Tooltip>
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
