import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/main.css'; 
import Home from './Home';
import Players from './Players';
import History from './History';
import Informations from './Informations';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/players" element={<Players />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
