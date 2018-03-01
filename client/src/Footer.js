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
          <li><a href="#">Github</a></li>
          <li><a href="#">Github</a></li>
          <li><a href="#">Github</a></li>
        </ul>
        <ul className="footer-section">
          <h3>Team</h3>
            <li><a href="https://github.com/michaelgee22" target="_blank">michaelgee22</a></li>
            <li><a href="https://github.com/Nicknyr" target="_blank">nicknyr</a></li>
            <li><a href="https://github.com/sam4815" target="_blank">sam4815</a></li>
            <li><a href="https://github.com/SharpEleven91" target="_blank">sharpeleven11</a></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
