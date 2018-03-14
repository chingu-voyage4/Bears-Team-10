import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../actions/auth-action';

import Header from './Layout/Header';
import Footer from './Layout/Footer';

import AuthPage from './Views/AuthPage';
import Epic from './Views/Epic';
import HomePage from './Views/HomePage';
import MapPage from './Views/MapPage';
import PictureOfTheDay from './Views/PictureOfTheDay';
import RedditFeed from './Elements/RedditFeed';
import SearchPage from './Views/SearchPage';
import SpaceX from './Views/SpaceX';
import StackExchange from './Views/StackExchange';
import TokenConfig from './Views/TokenConfig';
import UserDashboard from './Views/UserDashboard';
import ISS from './Elements/ISS';
//import CesiumMap from './Elements/Cesium';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.updateUserStatus(localStorage.getItem('AUTH_TOKEN'));
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />


          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/map" component={MapPage} />
            <Route path="/pictureoftheday" component={PictureOfTheDay} />
            <Route path="/search" component={SearchPage} />
            <Route path="/spacex" component={SpaceX} />
            <Route path="/stack-exchange" component={StackExchange} />
            <Route path="/epic" component={Epic} />
            <Route path="/token" component={TokenConfig} />
            <Route path="/dashboard" component={UserDashboard} />

            <Route path="/log-in" render={() => <AuthPage method="Log In" /> } />
            <Route path="/register" render={() => <AuthPage method="Register" /> } />
          </Switch>

          <RedditFeed subreddit="NASA" />
          <RedditFeed subreddit="SpaceX" />

          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  updateUserStatus: PropTypes.func.isRequired,
};

function mapStateToPros({ auth }) {
  return {
    authenticated: auth.authenticated,
  };
}


export default connect(mapStateToPros, actions)(App);
