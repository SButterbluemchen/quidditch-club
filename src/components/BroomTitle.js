import React from 'react';

const BroomTitle = (props) => {
  return (
    <div className='broom-title'>
      <h2>{props.title}</h2>
      <img
        className="history-broom-logo"
        src="broom-gold.png"
        alt="logo balai Harry Potter"
      />
    </div>
  );
};

export default BroomTitle;
