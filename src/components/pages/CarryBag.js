import React, { useState } from 'react';
import {carryBagHome, makeIndia, swachhBharat,carryDescription,carryLinks ,client1,client2} from './../data';
import { slide as Menu } from 'react-burger-menu';
import ReadMore from './ReadMore';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const CarryBag = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
    const sanitizeName = (name) => name.toLowerCase().replace(/\s+/g, '-');
    const client1Path = `/${sanitizeName(client1.name)}`;
    const client2Path = `/${sanitizeName(client2.name)}`;

  return (
    <div className="app-container">
        <Menu>
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/about">About us</a>
        <a className="menu-item" href="/achievements">Achievements</a>
        <div className="menu-item dropdown">
            <p onClick={toggleDropdown} style={{color:"#d1d1d1"}}>
              Clients <FontAwesomeIcon icon={dropdownVisible ? faChevronUp : faChevronDown} className="dropdown-icon" />
            </p>
            {dropdownVisible && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                <Link to={client1Path}>{client1.name}</Link>
                </div>
                <div className="dropdown-item">
                  <Link to={client2Path}>{client2.name}</Link>
                </div>
              </div>
            )}
          </div>
      </Menu>
      <div className="content">
    <div className="logo-row">
      <div className="logo-item">
        <img src={makeIndia.logo} alt="Company Logo" className="image-category" />
        <p>{makeIndia.name}</p>
      </div>
      <div className="logo-item">
        <img src={carryBagHome.logo} alt="Carry Bag Logo" className="image-category" />
        <p>{carryBagHome.name}</p>
      </div>
      <div className="logo-item">
        <img src={swachhBharat.logo} alt="Power Block Logo" className="image-category" />
        <p>{swachhBharat.name}</p>
      </div>
    </div>
    <h2>Description</h2>
    <ReadMore text={carryDescription} className="category-desc" style={{
            fontSize: '18px', 
            fontWeight: '400', 
            marginLeft: '25px', 
            marginRight: '25px', 
          }} />
        <div className="footer-content2">
      <div className="youtube-thumbnails">
        {carryLinks.map((video, index) => (
          <a key={index} href={video.url} target="_blank" rel="noopener noreferrer">
            <img src={video.thumbnail} alt={`video ${index + 1}`} className="link-video"/>
            <button onClick={() => window.open(video.url, '_blank')} className="watch-now-btn">
            Watch Now
          </button>
          </a>
        ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default CarryBag;
