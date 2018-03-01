import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import PictureOfTheDay from './PictureOfTheDay';
import Reddit from './Reddit';
import StackExchange from './StackExchange';
import SpaceX from './SpaceX';

import Mapbox from './map';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/pictureoftheday" component={PictureOfTheDay} />
            <Route path="/spacex" component={SpaceX} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
