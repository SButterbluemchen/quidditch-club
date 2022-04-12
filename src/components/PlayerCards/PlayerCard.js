import React from 'react';
import {useState} from 'react';
import PictoCard from './PictoPlayerCard';

export default function Card(props) {
  
  const [isActive, setIsActive] = useState(false);
  // const apiUrl = 'http://localhost:1337';

  function handlePlayerClick() {
    setIsActive(!isActive);
  }

  // http://localhost:1337/uploads/harry_Potter_eca7d93075.jpeg
  // {`http://localhost:1337${props.infos.image.data.attributes.url}`}
 
  return (
    <article className="card" onClick={handlePlayerClick}>
      <figure className="card-player-img">
        <img src="http://localhost:1337/uploads/harry_Potter_eca7d93075.jpeg" alt="Player" className="card-player--img"/>
      </figure>
      <div className={isActive ? 'card-player active' : 'card-player'}>
        <p className="card-player-number">{props.infos.number}</p>
        <div className="card-player-text">
          <p className="card-player-name">{props.infos.firstName} {props.infos.lastName}</p>
          <p className="card-player-position">{props.infos.position}</p>
          <ul>
            <li>
              <PictoCard picto='/Quidditch-bars.png' number='22' text='Joués'/>
            </li>
            <li>
              <PictoCard picto='/Cup.png' number='22' text='Gagnés'/>
            </li>
            <li>
              <PictoCard picto='/Scar.png' number='22' text='Perdus'/>
            </li>
            <li>
              <PictoCard picto='/broom.png' text={props.infos.broom}/>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}