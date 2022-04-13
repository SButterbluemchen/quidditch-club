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
        img="./rules/green-headband.png"
        description="Un·e gardien·ne par équipe porte un bandeau et mène le jeu du souafle"
      />
      <Rulescard
        img="./rules/black-headband.png"
        description="Deux batteur·euses par équipe lancent des cognards sur leurs adversaires"
      />
      <Rulescard
        img="./rules/yellow-headband.png"
        description="Un·e attrapeur·se dans chaque équipe est chargé·e d'attraper le vif d'or à partir de 18 minuntes de jeu"
      />
      <Rulescard
        img="./rules/white-headband.png"
        description="Trois poursuiveur·euses dans chaque équipe s'occupent de marquer des buts avec le souafle"
      />
    </>
  );
};

export default History;
