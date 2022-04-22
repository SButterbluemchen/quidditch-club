import React from 'react';
import './stylesheets/main.css'; 

import PageTopFrames from './components/Frames/PageTopFrames';
import ArrowToBeginning from './components/ArrowToBeginning';
import PageBottomFrames from './components/Frames/PageBottomFrames';
import Navbar from './components/Navbar';
import HomeClub from './components/HomeClub';
import Newsletter from './components/Newsletter';
import Presentation from './components/Presentation';
import Events from './components/Events';
import Donuts from './components/Donuts';
import HomeMap from './components/HomeMap';
import ScrollButton from './components/ScrollButton';
// import Footer from './components/Footer';

function Main() {
  return (
    <div className="Main">
      <Navbar />
      <PageTopFrames />
      <HomeClub />
      <Newsletter />
      <Presentation />
      <ArrowToBeginning />
      <Events />
      <ArrowToBeginning />
      <Donuts />
      <ArrowToBeginning />
      <HomeMap />
      <ScrollButton />
      <PageBottomFrames />
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
