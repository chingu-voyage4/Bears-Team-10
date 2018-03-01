import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import PictureOfTheDay from './Views/PictureOfTheDay';
import SpaceX from './Views/SpaceX';
import Reddit from './Views/Reddit';
import StackExchange from './Views/StackExchange';

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
