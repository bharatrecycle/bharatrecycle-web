import React from 'react'
import {aboutUs } from './../data';

const About = () => {
  return (
    <div className="about-container">
    <h1>About Us</h1>
    <p>
     {aboutUs}
    </p>
   
  </div>
  )
}

export default About
