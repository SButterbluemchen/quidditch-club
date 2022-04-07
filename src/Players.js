import React from 'react';
import Navbar from './components/Navbar';
import CardSection from './components/CardSection';

export default function Players() {

  return (
    <section className="page-players">
      <Navbar />
      <h2>Notre équipe de Quidditch</h2>
      <CardSection position='Attrapeur'/>
      <div className="page-players-div">
        <CardSection position='Batteur'/>
        <CardSection position='Poursuiveur'/>
        <CardSection position='Gardien'/>
        <CardSection position='Entraîneur'/>
      </div>
    </section>
  );
}
