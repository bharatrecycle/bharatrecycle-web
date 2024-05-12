import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';

import HomePage from './components/Home/Home'; 

import CategoryPage2 from './components/Category/Category2'; 

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage2 />} />
         

      </Routes>
  );
}

export default App;
