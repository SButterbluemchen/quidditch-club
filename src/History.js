import React from 'react';
import Timeline from './components/Timeline';
import Navbar from './components/Navbar';
import Rulescard from './components/Rulescard';

const History = () => {
  return (
    <>
      <Navbar/>
      <Timeline/>
      {/* Composant Rulescard : dessin + un peu de description */}
      <Rulescard
        img="./Broom.png"
        description="Blabla descriptif"
      />
      <Rulescard
        img="./Scar.png"
        description="Bloblo descriptif"
      />
      <Rulescard
        img="./cup.png"
        description="Blibli descriptif"
      />
    </>
  );
};

export default History;
