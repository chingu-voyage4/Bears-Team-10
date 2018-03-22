import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SmIcon from '../Icons/SmIcon';
import { MENU_ICON, SEARCH_ICON } from '../Icons/IconList';

class Header extends Component {
 renderHeaderLinks() {
    if (this.props.authenticated) {
      return <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>;
    }

    return (
      <div style={{display:'flex'}}>
        <li><Link to="/log-in" className="nav-link">Log In</Link></li>
        <li><Link to="/register" className="nav-link">Register</Link></li>
      </div>
    );
  }

  render() {
    return (
      <div className="header">
        <Link to="/" className="header-title">
          <h1>Bears 10 Project</h1>
        </Link>

        <ul className="nav-links">
          <li><Link to="/map" className="nav-link">Map</Link></li>
          <li><Link to="/pictureoftheday" className="nav-link">POTD</Link></li>
          <li><Link to="/spacex" className="nav-link">Space X</Link></li>
          {this.renderHeaderLinks()}
        </ul>

        <Link id="search-icon" to="/search"><SmIcon icon={SEARCH_ICON} /></Link>

        <div className="menu-btn">
          <SmIcon icon={MENU_ICON} />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  authenticated: PropTypes.bool
};

function mapStateToProps({ auth }) {
  return { authenticated: auth.authenticated };
}

export default connect(mapStateToProps)(Header);
