import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import UserList from './containers/user-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UserList />
      </div>
    );
  }
}


export default App;
