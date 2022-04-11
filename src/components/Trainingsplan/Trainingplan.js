import React from 'react';
import TrainingplanColumn from './TrainingplanColumn';

const trainingplan = () => {

  const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];

  return (
    <>
      <h2>Plan d&apos;entraînement</h2>
      <div className='trainingplan'>
        {weekdays.map(weekday => <TrainingplanColumn key={weekday.id} day={weekday} time="17h30 - 18h30" training="Entraînement"/>)}
      </div>
    </>
  );
};

export default trainingplan;