import React, { useState, useEffect } from 'react';
import './App.css';

import { fetchAPI } from './api';
import Search from "./Component/Search/Search.component";
import ImageResults from "./Component/ImageResults/ImageResults.component";
import NavBar from "./Component/NavBar/NavBar.component";
import {Grid} from "@material-ui/core";

function App() {
  const [ api, getAPI ] = useState({});
  const [ search, getSearch ] = useState('');
  const [favourites, setFavourites] = useState([]);
  
  useEffect (  async () => {
    const fetchedAPI = await fetchAPI(search);
    getAPI(fetchedAPI);
  }, [search]);
  
  return (
    <div className="app">
        <Grid container item xs={12} >
            <NavBar favourites={favourites} />
        </Grid>
        <Grid>
            <Search getSearch={getSearch}/>
        </Grid>
        <Grid>
      <ImageResults results={api} />
      </Grid>
    </div>
  );
}

export default App;
