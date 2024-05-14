import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Fab from "../Fab/Fab";
import { companyHome, carryBagHome, powerBlockHome } from './../data';

const HomePage = () => {
  const navigate = useNavigate();
 

  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/> 
      </nav>
      <div className="container">
      <div className="center">
      <img src={companyHome.logo} alt="Company Logo" className="image-home"/>
      </div>
      <div className="side">
        <div className="image">
        <img src={carryBagHome.logo} alt="Company Logo"className="image-home" onClick={() => navigate(`/carry/bag`)}/>
        <p className="text-home">{carryBagHome.name}</p>
        </div>
        <div className="image">
        <img src={powerBlockHome.logo} alt="Company Logo" className="image-home" onClick={() => navigate(`/power/block`)}/>
        <p className="text-home">{powerBlockHome.name}</p>
        </div>
      </div>
    </div>
    <div className="footer-background">
        <Fab /> 
    </div>
      
    </div>
  );
}

export default HomePage;
