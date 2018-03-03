import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import RedditFeed from './Elements/RedditFeed';

import HomePage from './Views/HomePage';
import MapPage from './Views/MapPage';
import PictureOfTheDay from './Views/PictureOfTheDay';
import SpaceX from './Views/SpaceX';
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
            <Route path="/spacex" component={SpaceX} />
            <Route path="/stack-exchange" component={StackExchange} />
          </Switch>

          <RedditFeed subreddit="NASA" />
          <RedditFeed subreddit="SpaceX" />

          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
