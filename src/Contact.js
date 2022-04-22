import React from 'react';
import Navbar from './components/Navbar';
import PageTopFrames from './components/Frames/PageTopFrames';
import PageBottomFrames from './components/Frames/PageBottomFrames';
import HomeMap from './components/HomeMap';
import InscriptionForm from './components/InscriptionForm';
import ArrowToBeginning from './components/ArrowToBeginning';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <PageTopFrames />
      <HomeMap />
      <ArrowToBeginning />
      <InscriptionForm />
      <PageBottomFrames />
    </div>
  );
};

export default Contact;