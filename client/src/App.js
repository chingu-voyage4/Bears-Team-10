import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import PictureOfTheDay from './PictureOfTheDay';
import Reddit from './Reddit';
import StackExchange from './StackExchange';
import SpaceX from './SpaceX';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
         <PictureOfTheDay />
         <SpaceX />
         <Reddit subreddit="NASA" />
         <Reddit subreddit="SpaceX" />
        <Footer />
      </div>
    );
  }
}


export default App;
