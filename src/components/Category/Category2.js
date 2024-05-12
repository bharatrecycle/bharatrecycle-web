import React from 'react';
import { useParams } from 'react-router-dom';
import {categories2} from '../data'; 
import Fab from "../Fab/Fab";
import {youtubeVideos} from "../data";

const CategoryPage2 = () => {
  const { categoryName } = useParams();

  const category = categories2.find(category => category.name === categoryName);

  if (!category) return <div>Category not found</div>;

  if (!category) return <div>Category not found</div>;

  return (
    <div className="App">
        <div className="heading-container">
        <div className="background"></div>
        <h1>{category.name}</h1>
        </div>
       {category.items.map((item, index) => (
            <div key={item.id} className={`content-item ${index % 2 === 0 ? "content-image-right" : "content-image-left"}`}>
              <div className="content-image">
                <img src={item.imageUrl} alt={`${item.id}`} />
              </div>
              <div className="content-description">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      <Fab /> 
      <footer className="footer2">
        <h1>Youtube Links</h1>
        <div className="footer-content2">
      <div className="youtube-thumbnails">
        {youtubeVideos.map((video, index) => (
          <div key={index} className="youtube-video">
            <img src={video.thumbnail} alt={`YouTube video ${index + 1}`} />
            <button onClick={() => window.open(video.url, '_blank')} className="watch-now-btn">
            Watch Now
          </button>
          </div>
        ))}
        </div>
      </div>
    </footer>
    </div>
    
  );
}

export default CategoryPage2;
