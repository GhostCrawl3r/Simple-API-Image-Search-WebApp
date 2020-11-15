import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button} from "@material-ui/core";
import Search from "../../Component/Search/Search.component";
import ImageResults  from "../../Component/ImageResults/ImageResults.component";
import NavBar  from "../../Component/NavBar/NavBar.component";
import { fetchAPI } from "../../api";
import styles from './Home.module.css';

function Home () {
    const [ api, getAPI ] = useState({});
    const [ search, getSearch ] = useState('');
    const [favourites, setFavourites] = useState([]);
    const [load, setLoad] = useState(false);
    
    useEffect (  async () => {
        const fetchedAPI = await fetchAPI(search);
        getAPI(fetchedAPI);
    }, [search]);
    
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
                                <NavBar favourites={favourites} />
                            </Grid>
                            <Grid>
                                <Search getSearch={getSearch}/>
                            </Grid>
                            <Grid>
                                <ImageResults results={api} />
                            </Grid>
                        </div>
                    ) : loadModal()}
                </div>
    );
}

export default Home;

