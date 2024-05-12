import React from 'react';
import { useNavigate } from 'react-router-dom';
import {categories} from '../data';
import logo from '../../assets/logo.png';
import Fab from "../Fab/Fab";
import Caraousel from './Caraousel';
import { carouselData } from './../data';

const HomePage = () => {
  const navigate = useNavigate();
 

  return (
    <div className="App">
        <div className="background"></div>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/> 
        <h2 className="home-button">Home</h2>
      </nav>
      <h1 className="heading">Welcome to Bharatremake</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category" onClick={() => navigate(`/category/${category.name}`)}>
            <img src={category.imageUrl} alt={category.name} className="category-image"/>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <Fab /> 
      <footer className="footer">
      <h1><i className="fas fa-trophy"></i> Honors and Achievements</h1>
      <Caraousel data={carouselData} />
      </footer>
    </div>
  );
}

export default HomePage;
