import React from 'react';

import LgIcon from '../Icons/LgIcon';
import { DATA, MAP, ROCKET } from '../Icons/IconList';

const Homepage = props => (
  <div className="route-container">
    <div className="homepage-section">
      <h1 className="homepage-title">Homepage</h1>
      <p class="homepage-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p class="homepage-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis placeat necessitatibus, sequi, nobis accusamus optio corporis ut officia iste quibusdam ullam autem dicta aperiam animi, earum odit ducimus ipsam illo incidunt, sint quam! Eligendi corrupti similique, cumque voluptate veritatis fugiat. Accusamus qui omnis nemo eligendi, cumque odio ut quas consectetur et nisi soluta recusandae excepturi! Consectetur voluptatibus officia minus veritatis iure mollitia commodi in. A excepturi libero fugit esse eveniet repudiandae aut, labore odio ipsa dolores maxime! Temporibus, repellendus, fuga.</p>
      <p class="homepage-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis placeat necessitatibus, sequi, nobis accusamus optio corporis ut officia iste quibusdam ullam autem dicta aperiam animi, earum odit ducimus ipsam illo incidunt, sint quam! Eligendi corrupti similique, cumque voluptate veritatis fugiat. Accusamus qui omnis nemo eligendi, cumque odio ut quas consectetur et nisi soluta recusandae excepturi! Consectetur voluptatibus officia minus veritatis iure mollitia commodi in. A excepturi libero fugit esse eveniet repudiandae aut, labore odio ipsa dolores maxime! Temporibus, repellendus, fuga.</p>
    </div>

    <div className="features">
      <h2 id="features-title">Features</h2>
      <ul id="features-list">
        <li class="feature-item">
          <h3 class="feature-item-title">Data</h3>
          <LgIcon icon={DATA} />
          <p class="feature-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quibusdam non aspernatur, natus, perferendis</p>
        </li>
        <li class="feature-item">
          <h3 class="feature-item-title">Launches</h3>
          <LgIcon icon={ROCKET} />
          <p class="feature-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repellendus repellat dolorum qui alias</p>
        </li>
        <li class="feature-item">
          <h3 class="feature-item-title">Maps</h3>
          <LgIcon icon={MAP} />
          <p class="feature-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad veritatis vitae tempora, saepe nisi</p>
        </li>
      </ul>
    </div>

    <div className="homepage-section">
      <h1 className="homepage-title">Another Content Section</h1>
      <p class="homepage-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p class="homepage-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis placeat necessitatibus, sequi, nobis accusamus optio corporis ut officia iste quibusdam ullam autem dicta aperiam animi, earum odit ducimus ipsam illo incidunt, sint quam! Eligendi corrupti similique, cumque voluptate veritatis fugiat. Accusamus qui omnis nemo eligendi, cumque odio ut quas consectetur et nisi soluta recusandae excepturi! Consectetur voluptatibus officia minus veritatis iure mollitia commodi in. A excepturi libero fugit esse eveniet repudiandae aut, labore odio ipsa dolores maxime! Temporibus, repellendus, fuga.</p>
      <p class="homepage-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis placeat necessitatibus, sequi, nobis accusamus optio corporis ut officia iste quibusdam ullam autem dicta aperiam animi, earum odit ducimus ipsam illo incidunt, sint quam! Eligendi corrupti similique, cumque voluptate veritatis fugiat. Accusamus qui omnis nemo eligendi, cumque odio ut quas consectetur et nisi soluta recusandae excepturi! Consectetur voluptatibus officia minus veritatis iure mollitia commodi in. A excepturi libero fugit esse eveniet repudiandae aut, labore odio ipsa dolores maxime! Temporibus, repellendus, fuga.</p>
    </div>

  </div>
);

export default Homepage;
