import './stylesheets/main.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <Routes>
      <div>
        <Route path="/" element={<Home />} />
      </div>
    </Routes>
  );
}

export default App;
