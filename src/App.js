import React from 'react';
import './App.css';

import Home from "./Pages/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Favourites from "./Pages/Favourites";

function App() {
  
  return (
    <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/favourites' component={Favourites} />
    </Router>
  );
}

export default App;
