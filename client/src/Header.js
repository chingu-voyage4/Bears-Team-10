import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-title"><a className="nav-link" href="/">Bears 10 Project</a></h1>

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
