import React from 'react';
import {contact} from '../data';


const Fab = () => {
  return (
    <div className="fab-container">
     <a href={`https://wa.me/${contact.phoneNumber}`} className="fab whatsapp">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href={`mailto:${contact.email}`} className="fab email">
        <i className="fa fa-envelope"></i>
      </a>
      <a href={contact.instagram} className="fab instagram">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default Fab;