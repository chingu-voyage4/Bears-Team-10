import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import PictureOfTheDay from './PictureOfTheDay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PictureOfTheDay />
        <Footer />
      </div>
    );
  }
}


export default App;
