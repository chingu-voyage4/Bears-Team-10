import React, { Component } from 'react';
import Icon from 'react-fa';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul>
          <li><a href="#">Link1</a></li>
          <li><a href="#">Link2</a></li>
          <li><a href="#">Link3</a></li>
          <li><a href="#">Link4</a></li>
        </ul>
        <ul>
          <li><a href="#"><Icon name="github" size="2x" /></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    );
  }
}

export default Footer;
