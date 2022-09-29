import React from 'react'
import './Apps.scss';

import {
  BrowserRouter as Router,

  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import PageNotFound from "./components/PageNotFound/PageNotFound.js";
import Footer from './components/Footer/Footer'
import MovieDetails from './components/MovieDetails/MovieDetails';
import Stats from './components/Stats/Stats';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:imdbID" component={MovieDetails} />
            <Route exact path="/Stats" component={Stats} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
