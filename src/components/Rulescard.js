import React from 'react';

/* Composant Rulescard : dessin + un peu de description */
const Rulescard = (props) => {
  return (
    <section className="rulescard-card">
      <div className="rulescard-body">
        <img className="rulescard-img" src={props.img}/>
        <p className="rulescard-description">{props.description}</p>
      </div>
    </section>
  );
};

export default Rulescard;
