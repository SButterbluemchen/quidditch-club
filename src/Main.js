import React from 'react';
import './stylesheets/main.css'; 

import PageTopFrames from './components/Frames/PageTopFrames';
import PageBottomFrames from './components/Frames/PageBottomFrames';
import Navbar from './components/Navbar';
import HomeClub from './components/HomeClub';
import Newsletter from './components/Newsletter';
import Presentation from './components/Presentation';
import Events from './components/Events';
import Donuts from './components/Donuts';
// import HomeMap from './components/HomeMap';


function Main() {
  return (
    <div className="Main">
      <Navbar />
      <PageTopFrames />
      <HomeClub />
      <Newsletter />
      <Presentation />
      <Events />
      <Donuts />
      {/* 
      <HomeMap /> */}
      <PageBottomFrames />
    </div>
  );
}

export default Main;
