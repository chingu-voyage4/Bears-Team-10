import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import PictureOfTheDay from './PictureOfTheDay';
import Reddit from './Reddit';
import StackExchange from './StackExchange';
import SpaceX from './SpaceX';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mapbox from './Map';
import Example from './Searchbar';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Example />
      <Router>
        <Switch>
          <Route path="/pictureoftheday" component={PictureOfTheDay}/>
          <Route path="/spacex" component={SpaceX}/>
        </Switch>
      </Router>
      <Mapbox />
      <Reddit subreddit="NASA" />
      <Reddit subreddit="SpaceX" />
      <Footer />
      </div>
    );
  }
}


export default App;
