import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';

import HomePage from './components/Home/Home'; 
import CarryBag from './components/pages/CarryBag';
import PowerBlock from './components/pages/PowerBlock';
import About from './components/pages/About';
import Achievements from './components/pages/Achievement';

import {client1, client2 } from './components/data';
import Client1 from './components/pages/Client1';
import Client2 from './components/pages/Client2';



const App = () => {
  const sanitizeName = (name) => name.toLowerCase().replace(/\s+/g, '-');
  const client1Path = `/${sanitizeName(client1.name)}`;
  const client2Path = `/${sanitizeName(client2.name)}`;
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carry/bag" element={<CarryBag />} />
        <Route path="/power/block" element={<PowerBlock/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path={client1Path} element={<Client1 />} />
        <Route path={client2Path} element={<Client2 />} />
      </Routes>
  );
}

export default App;
