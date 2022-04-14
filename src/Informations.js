import React from 'react';
import Navbar from './components/Navbar';
import PageTopFrames from './components/Frames/pageTopFrames';
import PageBottomFrames from './components/Frames/PageBottomFrames';
import Trainingplan from './components/Trainingsplan/Trainingplan';
import ImageTextBlock from './components/ImageTextBlock';
import RankingTable from './components/Ranking/RankingTable';
import InscriptionForm from './components/InscriptionForm';

const Informations = () => {
  return (
    <section className='container'>
      <Navbar />
      <PageTopFrames />
      <Trainingplan />
      <RankingTable />
      <ImageTextBlock sectionTitle="Bienvenu dans notre stade" image="/stadium2.jpeg" title="Un stade au coeur de Poudlard" />
      <ImageTextBlock articleClassName="right" image="/stadium.jpeg" title="Une pelouse de qualité pour plus de succès"/>
      <InscriptionForm />
      <PageBottomFrames />
    </section>
  );
};

export default Informations;