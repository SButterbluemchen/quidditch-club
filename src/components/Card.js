import React from 'react';
// import {useState, useEffet} from 'react';

export default function Card() {

  return (
    <article className="card">
      <figure>
        <img src="/logo192.png" alt="Player" className="card-player--img"/>
      </figure>
      <div className="card-player">
        <p className="card-player--number">1</p>
        <div className="card-player--information">
          <p className="card-player--name">Harry Potter</p>
          <p className="card-player--position">Attrapeur</p>
        </div>
      </div>
    </article>
  );
}