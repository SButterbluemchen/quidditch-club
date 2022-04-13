import React from 'react';

const trainingplanRow = (props) => {

  const trainingArray = props.trainingAttributes.trainings;
  const trainingsTime = trainingArray.map((training, index) =>
    <tr key={index}>
      {training && <>
        {training.begin && <td className="training-time">{training.begin} - {training.end}</td>}
        <td style={{ textTransform: 'capitalize'}}>{training.name}</td>
      </>}
    </tr>
  );

  return (
    <table className='trainingplan-column'>
      <thead>
        <tr>
          <th><h4>{props.trainingAttributes.day}</h4></th>
        </tr>
      </thead>
      <tbody>{trainingsTime}</tbody>
    </table>
  );
};

export default trainingplanRow;