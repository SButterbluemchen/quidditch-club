import './stylesheets/main.css';
import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
import Members from './Members';


export default function App() {
  return (
    // <Routes>
    <div>
      {/* <Route path="/" element={<Home />} /> */}
      <Members />
    </div>
    // </Routes>
  );
}
