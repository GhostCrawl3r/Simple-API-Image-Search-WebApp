import React from 'react';
import NavBar from "../Component/NavBar/NavBar.component";
import {Grid} from "@material-ui/core";

function Favourites() {
    return (
        <div>
            <Grid container item xs={12} >
                <NavBar />
            </Grid>
        </div>
    );
};

export default Favourites;
