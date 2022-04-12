import React from 'react';
import Card from './PlayerCard';

const CardSection = (props) => {

  return (
    <section className="card-section container">
      <h3>{props.position}</h3>
      <figure className="player-broom-logo">
        <img src="broom-gold.png" alt="broom-gold-logo" />
      </figure>
      <article className='card-section-players'>
        {props.players.map(player => <Card key={player.id} infos={player.attributes}/>)};
      </article>
    </section>
  );
};

export default CardSection;