import React from 'react';
import NavBar from "../../Component/NavBar/NavBar.component";
import { Grid } from "@material-ui/core";
import FavouriteCOMP from "../../Component/Favourites/FavouriteCOMP.component";
import ReactNotification from "react-notifications-component";

function Favourites() {
    return (
        <div>
            <Grid container item xs={12} >
                <NavBar />
            </Grid>
                <Grid container item xs={12}>
                    <ReactNotification />
                    <FavouriteCOMP />
                </Grid>
        </div>
    );
}

export default Favourites;
