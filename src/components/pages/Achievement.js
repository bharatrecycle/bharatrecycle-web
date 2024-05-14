import React from 'react'
import {achievements} from './../data';


const Achievements = () => {
    return (
      <div className="achievements-page">
        <h1>Achievements</h1>
        {achievements.map((item) => (
          <div key={item.id} className="achievement-item">
            <div className="achievement-image">
              <img src={item.imageUrl} alt={`Achievement ${item.id}`} />
            </div>
            <div className="achievement-description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Achievements;
