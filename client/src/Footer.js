import React, { Component } from 'react';
import Icon from 'react-fa';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="container">
        <ul className="footer-section">
          <h3>Links</h3>
          <li><a href="#">Link1</a></li>
          <li><a href="#">Link2</a></li>
          <li><a href="#">Link3</a></li>
          <li><a href="#">Link4</a></li>
        </ul>
        <ul className="footer-section">
          <h3>Social</h3>
          <li><a href="#"><Icon name="github" size="2x" />Github</a></li>
          <li><a href="#"><Icon name="github" size="2x" />Github</a></li>
          <li><a href="#"><Icon name="github" size="2x" />Github</a></li>
        </ul>
        <ul className="footer-section">
          <h3>Blah</h3>
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
          <li><a href="#">Four</a></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
