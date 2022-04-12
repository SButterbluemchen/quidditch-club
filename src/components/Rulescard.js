import React from 'react';


/* Composant Rulescard : dessin + un peu de description */
const Rulescard = (props) => {
  return (
    <div className='rulescard-card'>
      <div className='rulescard-body'>
        <img className='rulescard-img' src={props.img}/>
        <p className='rulescard-description'>{props.description}</p>

      </div>

    </div>
  );
};

export default Rulescard;
