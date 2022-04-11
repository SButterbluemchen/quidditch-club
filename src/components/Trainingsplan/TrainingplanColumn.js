import React from 'react';

const trainingplanColumn = (props) => {
  return (
    <div className='trainingplan-column'>
      <h4>{props.day}</h4>
      <div>
        <p className="training-time">{props.time}</p>
        <p>{props.training}</p>
      </div>
      <div>
        <p className="training-time">{props.time}</p>
        <p>{props.training}</p>
      </div>
    </div>
  );
};

export default trainingplanColumn;