// import 'primereact/resources/primereact.min.css';             //core css
// import 'primeicons/primeicons.css';             
// import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/main.css';
import Home from './Home';
import Players from './Players';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}
