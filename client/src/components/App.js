import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import HomePage from './Views/HomePage';
import MapPage from './Views/MapPage';
import PictureOfTheDay from './Views/PictureOfTheDay';
import SpaceX from './Views/SpaceX';
import Reddit from './Views/Reddit';
import StackExchange from './Views/StackExchange';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/map" component={MapPage} />
            <Route path="/pictureoftheday" component={PictureOfTheDay} />
            <Route path="/reddit" component={Reddit} subreddit="spacex" />
            <Route path="/spacex" component={SpaceX} />
            <Route path="/stack-exchange" component={StackExchange} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
