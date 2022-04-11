import React from 'react';

const trainingplanColumn = (props) => {
  return (
    <table className='trainingplan-column'>
      <tr>
        <th><h4>{props.day}</h4></th>
      </tr>
      <tr>
        <td className="training-time">{props.time}</td>
        <td>{props.training}</td>
      </tr>
    </table>
  );
};

export default trainingplanColumn;