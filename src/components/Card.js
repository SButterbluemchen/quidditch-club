import React from 'react';
import {useState} from 'react';
import PictoCard from './PictoCard';

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
              <PictoCard picto='/Quidditch-bars.png' number='22' activity='Joués'/>
            </li>
            <li>
              <PictoCard picto='/Cup.png' number='22' activity='Gagnés'/>
            </li>
            <li>
              <PictoCard picto='/Scar.png' number='22' activity='Perdus'/>
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