// import 'primereact/resources/primereact.min.css';             //core css
// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/main.css';
import Home from './pages/Home';
import Players from './pages/Players';
import History from './pages/History';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
