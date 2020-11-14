import React, { useState, useEffect } from 'react';
import './App.css';

import { fetchAPI } from './api';
import Search from "./Component/Search/Search.component";
import ImageResults from "./Component/ImageResults/ImageResults.component";

function App() {
  const [ api, getAPI ] = useState({});
  const [ search, getSearch ] = useState('');
  
  useEffect (  async () => {
    const fetchedAPI = await fetchAPI(search);
    getAPI(fetchedAPI);
  }, [search]);
  
  return (
    <div className="app">
      <Search getSearch={getSearch}/>
      <ImageResults results={api} />
    </div>
  );
}

export default App;
