import React, { useState, useEffect } from 'react';
import TrainingplanRow from './TrainingplanRow';

const trainingplan = () => {

  const [trainingData, setTrainingData] = useState([]);

  useEffect(() => {
    fetch('/trainingdata.json')
      .then(res => res.json())
      .then(data => setTrainingData(data.trainingdata));
  }, []);

  return (
    <>
      <h2>Plan d&apos;entraînement</h2>
      <div className='trainingplan'>
        {trainingData.map(trainingItem => <TrainingplanRow key={trainingItem.id} trainingAttributes={trainingItem.attributes}/>)}
      </div>
    </>
  );
};

export default trainingplan;