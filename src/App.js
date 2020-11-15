import React from 'react';
import './App.css';
import 'fontsource-roboto';

import Home from "./Pages/Home/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Favourites from "./Pages/Favourites/Favourites";

function App() {
  
  return (
    <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/favourites' component={Favourites} />
    </Router>
  );
}

export default App;
