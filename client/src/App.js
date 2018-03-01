import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import PictureOfTheDay from './PictureOfTheDay';
import Reddit from './Reddit';
import StackExchange from './StackExchange';
import SpaceX from './SpaceX';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mapbox from './map';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/pictureoftheday" component={PictureOfTheDay}/>
          <Route path="/spacex" component={SpaceX}/>
        </Switch>
      </Router>
      <Footer />
      </div>
    );
  }
}


export default App;
