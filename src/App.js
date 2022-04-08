import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/main.css'; 
import Home from './Home';
import Players from './Players';
import History from './History';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
