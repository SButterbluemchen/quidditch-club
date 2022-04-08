import React from 'react';

export default function PictoCard(props) {

  return (
    <div>
      <figure className="card-picto">
        <img src={props.picto} />
      </figure>
      <p>{props.number}</p>
      <p>{props.text}</p>
    </div>
  );
}