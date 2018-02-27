import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ul>
          <li><a href="#">Link1</a></li>
          <li><a href="#">Link2</a></li>
          <li><a href="#">Link3</a></li>
          <li><a href="#">Link4</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
