import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-container">
          <ul className="footer-section">
            <h3 className="footer-title">Pages</h3>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/pictureoftheday">POTD</Link></li>
            <li><Link to="/spacex">SpaceX</Link></li>
            <li><Link to="/stack-exchange">Stack Exchange</Link></li>
          </ul>
          <ul className="footer-section">
            <h3 className="footer-title">Social</h3>
            <li><a href="https://github.com/chingu-voyage4/Bears-Team-10" target="_blank">Github</a></li>
            <li><a href="#">Other Media</a></li>
            <li><a href="#">Other Media</a></li>
          </ul>
          <ul className="footer-section">
            <h3 className="footer-title">Team</h3>
              <li><a href="https://github.com/michaelgee22" target="_blank">michaelgee22</a></li>
              <li><a href="https://github.com/Nicknyr" target="_blank">nicknyr</a></li>
              <li><a href="https://github.com/SharpEleven91" target="_blank">sharpeleven11</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
