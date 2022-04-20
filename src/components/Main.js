import React from 'react';

import './main.css';

import HomeClub from './components/HomeClub';
import Newsletter from './components/Newsletter';
import Presentation from './components/Presentation';
import Events from './components/Events';
import Donuts from './components/Donuts';
import HomeMap from './components/HomeMap';


function Main() {
  return (
    

    <div className="Main">
      <HomeClub />
      <Newsletter />
      <Presentation />
      <Events />
      <Donuts />
      <HomeMap />
    </div>
  );
}

export default Main;
