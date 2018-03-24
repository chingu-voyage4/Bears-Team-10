import React from 'react';
import PictureOfTheDay from './PictureOfTheDay';
import LgIcon from '../Icons/LgIcon';
import { DATA_ICON, MAP_ICON, ROCKET_ICON } from '../Icons/IconList';

const Homepage = props => (
  <div>
    <div className="homepage-section homepage-top">
      <h1 className="homepage-title-top">Are you a space enthusiast too?</h1>
      <h3 className="homepage-subtitle-top">Never miss another launch</h3>
      <p className="homepage-paragraph-top">We&#39;ve compiled several NASA and SpaceX API&#39;s in one place, along with a searchbar that searches all of them. </p>
      <div className="button-container">
        <button>Register</button>
        <button>Log In</button>
      </div>
    </div>

    <div className="features">
      <h2 id="features-title">Features</h2>
      <ul id="features-list">
        <li className="feature-item">
          <h3 className="feature-item-title">Data</h3>
          <LgIcon icon={DATA_ICON} />
          <p className="feature-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quibusdam non aspernatur, natus, perferendis</p>
        </li>
        <li className="feature-item">
          <h3 className="feature-item-title">Launches</h3>
          <LgIcon icon={ROCKET_ICON} />
          <p className="feature-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellendus repellat dolorum qui alias</p>
        </li>
        <li className="feature-item">
          <h3 className="feature-item-title">Maps</h3>
          <LgIcon icon={MAP_ICON} />
          <p className="feature-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad veritatis vitae tempora, saepe nisi</p>
        </li>
      </ul>
    </div>

    <div className="homepage-section">
      <h1 className="homepage-title-bottom">Everything in one place</h1>
      <p className="homepage-paragraph-bottom">There is a wealth of knowledge available on the internet when it comes to everything, and the same is true for space exploration and astronomy. NASA has made tons of their data available to the public online through various APIs and website. Combing through all the data from various NASA organizations in search of what youre looking for can be cumbersome and time consuming. Thats exactly why we have compiled this data in an easy to search format.</p>
      <p className="homepage-paragraph-bottom">In addition to NASAs work there is also major excitement surrounding Elon Musk and SpaceX. SpaceXs mission to land humans on Mars has regenerated the publics interest in space exploration and it seems as if there is always an upcoming SpaceX launch.</p>
      <p className="homepage-paragraph-bottom">The buzz around this new chapter in space exploration and the massive amounts of data available to the public has inspired us to compile this data in one place and make finding what youre searching for significantly easier and less time consuming. Search the <a href="#">data</a>, <a href="#">browse the location of facilities</a>, <a href="#">sign up for email reminders</a> on upcoming launches, or check out the NASA picture of the day: </p>
    </div>

    <PictureOfTheDay />

  </div>
);

export default Homepage;
