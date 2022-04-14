import React from 'react';

const trainingplanColumn = (props) => {
  return (
    <table className='trainingplan-column'>
      <thead>
        <tr>
          <th><h4>{props.day}</h4></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="training-time">{props.time}</td>
          <td>{props.training}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default trainingplanColumn;