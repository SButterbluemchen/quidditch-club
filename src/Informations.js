import React from 'react';
import Navbar from './components/Navbar';
import PageTopFrames from './components/Frames/PageTopFrames';
import PageBottomFrames from './components/Frames/PageBottomFrames';
import Trainingplan from './components/Trainingsplan/Trainingplan';
import ImageTextBlock from './components/ImageTextBlock';
import RankingTable from './components/Ranking/RankingTable';
import InscriptionForm from './components/InscriptionForm';
import ArrowToBeginning from './components/ArrowToBeginning';
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';

const Informations = () => {
  return (
    <section className='container'>
      <Navbar />
      <PageTopFrames />
      <Trainingplan />
      <ArrowToBeginning />
      <RankingTable />
      <ArrowToBeginning />
      <ImageTextBlock sectionTitle="Bienvenue dans notre stade" image="/stadium2.jpeg" title="Un stade au coeur de Poudlard" />
      <ImageTextBlock articleClassName="right" image="/stadium.jpeg" title="Une pelouse de qualité pour plus de succès"/>
      <ArrowToBeginning />
      <InscriptionForm />
      <ScrollButton />
      <PageBottomFrames />
      <Footer />
    </section>
  );
};

export default Informations;