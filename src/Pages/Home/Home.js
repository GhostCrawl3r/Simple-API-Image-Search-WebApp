import React, { useEffect, useContext } from 'react';
import { Grid, Paper, Typography, Button} from "@material-ui/core";
import Search from "../../Component/Search/Search.component";
import ImageResults  from "../../Component/ImageResults/ImageResults.component";
import NavBar  from "../../Component/NavBar/NavBar.component";
import styles from './Home.module.css';
import {LoadContext} from "../../context/GlobalContext";

function Home () {
    const [load, setLoad] = useContext(LoadContext);
    
    const loadModal = () => {
        return (
            <Grid container item xs={12} alignItems="center" alignContent="center">
                <Paper elevation={3} square={true} className={styles.container}>
                        <Typography variant='h3' align="center">Warning!</Typography>
                        <Typography variant='h6' align="center">This site may contain images of an adult nature, please proceed with caution.</Typography>
                        <Button onClick={() => setLoad(true)} color="secondary" variant="contained">Okay</Button>
                </Paper>
            </Grid>
        );
    }
    
    return (
                <div className="app">
                    {load ? (
                        <div>
                            <Grid container item xs={12}>
                                <NavBar />
                            </Grid>
                            <Grid>
                                <Search />
                            </Grid>
                            <Grid>
                                <ImageResults />
                            </Grid>
                        </div>
                    ) : loadModal()}
                </div>
    );
}

export default Home;

