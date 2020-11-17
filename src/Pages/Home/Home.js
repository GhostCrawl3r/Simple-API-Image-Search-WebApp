import React, { useContext } from 'react';
import { Grid, Paper, Typography, Button} from "@material-ui/core";
import Search from "../../Component/Search/Search.component";
import ImageResults  from "../../Component/ImageResults/ImageResults.component";
import NavBar  from "../../Component/NavBar/NavBar.component";
import styles from './Home.module.css';
import {LoadContext} from "../../context/GlobalContext";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Pagination from '@material-ui/lab/Pagination';

import {PageData} from "../../context/GlobalContext";

function Home () {
    const [load, setLoad] = useContext(LoadContext);
    const [page, setPage] = useContext(PageData);
    
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
    
    const handleChange = e => {
        const pageNum = parseInt(e.target.innerText);
        setPage(pageNum);
    }
    
    console.log(page);
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
                                <ReactNotification />
                                <ImageResults />
                            </Grid>
                            <Grid container>
                                <Grid item md={5} xs={2}></Grid>
                                <Grid item xs={9} md={3}>
                                    <Pagination count={5} page={page} onChange={handleChange}/>
                                </Grid>
                                <Grid item md={4} xs={1}></Grid>
                            </Grid>
                        </div>
                    ) : loadModal()}
                </div>
    );
}

export default Home;

