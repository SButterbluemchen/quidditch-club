import React from 'react';
import {useState} from 'react';

export default function Card(props) {
  
  const [isActive, setIsActive] = useState(false);

  function handlePlayerClick() {
    setIsActive(!isActive);
  }

  return (
    <article className="card" onClick={handlePlayerClick}>
      <figure className="card-player-img">
        <img src={props.info.image} alt="Player" className="card-player--img"/>
      </figure>
      <div className={isActive ? 'card-player active' : 'card-player'}>
        <p className="card-player-number">1</p>
        <div className="card-player-text">
          <p className="card-player-name">{props.info.name}</p>
          <p className="card-player-position">Attrapeur</p>
          <ul>
            <li>
              <div>
                <figure className="card-picto">
                  <img src="quidditch-bars.png" />
                </figure>
                <p>22</p>
                <p>Joués</p>
              </div>
            </li>
            <li>
              <div>
                <figure className="card-picto">
                  <img src="Cup.png" />
                </figure>
                <p>22</p>
                <p>Gagnés</p>
              </div>
            </li>
            <li>
              <div>
                <figure className="card-picto">
                  <img src="Scar.png" />
                </figure>
                <p>22</p>
                <p>Perdus</p>
              </div>
            </li>
          </ul>
          <div className="broom">
            <figure>
              <img src="broom.png" />
            </figure>
            <p>Firebolt 500</p>
          </div>
        </div>
      </div>
    </article>
  );
}