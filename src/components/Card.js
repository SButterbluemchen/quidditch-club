import React from 'react';
// import {useState, useEffet} from 'react';

export default function Card(props) {

  function handlePlayerClick() {
    console.log(`clicked on ${props.info.firstName}`);
  }

  return (
    <article className="card" onClick={handlePlayerClick}>
      <figure>
        <img src={props.info.image} alt="Player" className="card-player--img"/>
      </figure>
      <div className="card-player">
        <p className="card-player--number">1</p>
        <div className="card-player--information">
          <p className="card-player--name">{props.info.name}</p>
          <p className="card-player--position">Attrapeur</p>
        </div>
      </div>
    </article>
  );
}