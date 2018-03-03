import React from 'react';

const Homepage = props => (
  <div className="route-container">
    <div className="landing">
      <h1>Homepage</h1>
      <div className="main-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam saepe ipsa quo quisquam omnis similique ratione neque, minima deserunt, eos voluptatum amet corporis modi hic. Aliquid quos, cumque enim ducimus quasi facilis nostrum repella</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis placeat necessitatibus, sequi, nobis accusamus optio corporis ut officia iste quibusdam ullam autem dicta aperiam animi, earum odit ducimus ipsam illo incidunt, sint quam! Eligendi corrupti similique, cumque voluptate veritatis fugiat. Accusamus qui omnis nemo eligendi, cumque odio ut quas consectetur et nisi soluta recusandae excepturi! Consectetur voluptatibus officia minus veritatis iure mollitia commodi in. A excepturi libero fugit esse eveniet repudiandae aut, labore odio ipsa dolores maxime! Temporibus, repellendus, fuga.</p>
      </div>
    </div>
    <div className="features">
      <h2>Features</h2>
      <ul>
        <li>
          <h3>Data</h3>
          <img src={require('../../images/rocket.png')}/><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quibusdam non aspernatur, natus, perferendis</p>
        </li>
        <li>
          <h3>Maps</h3>
          <img src={require('../../images/rocket.png')}/><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellendus repellat dolorum qui alias</p>
        </li>
        <li>
          <h3>Launches</h3>
          <img src={require('../../images/rocket.png')}/><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad veritatis vitae tempora, saepe nisi</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Homepage;
