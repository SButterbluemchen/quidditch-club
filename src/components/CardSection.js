import React from 'react';
import Card from './Card';

const CardSection = (props) => {

  return (
    <section className="card-section container">
      <h3>{props.position}</h3>
      <article className='card-section-players'>
        {props.players.map(player => <Card key={player.id} infos={player.attributes}/>)}
      </article>
    </section>
  );
};

export default CardSection;