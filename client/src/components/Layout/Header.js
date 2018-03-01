import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-title">
          <h1>Bears 10 Project</h1>
        </Link>

        <ul className="nav-links">
          <li><a className="nav-link" href="#">Link1</a></li>
          <li><a className="nav-link" href="#">Link2</a></li>
          <li><a className="nav-link" href="#">Link3</a></li>
          <li><a className="nav-link" href="/pictureoftheday">Picture of the Day</a></li>
        </ul>

        <div className="menu-btn">BTN</div>
      </div>
    );
  }
}

export default Header;
