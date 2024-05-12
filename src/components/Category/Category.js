import React from 'react';
import { useParams } from 'react-router-dom';
import {categories} from '../data'; 
import Fab from "../Fab/Fab";
import {youtubeVideos} from "../data";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const categoryDetails = categories.reduce((acc, category) => {
    acc[category.name] = { imageUrl: category.imageUrl, description: category.description };
    return acc;
  }, {});

  const category = categoryDetails[categoryName];

  if (!category) return <div>Category not found</div>;

  return (
    <div className="App">
      <img src={category.imageUrl} alt={categoryName} className="category-image-desc" />
      <h1 className="category-name-desc">{categoryName}</h1>
      <p className="category-desc">{category.description}</p>
      <Fab /> 
      <footer className="footer">
        <h1>Youtube Links</h1>
        <div className="footer-content2">
      <div className="youtube-thumbnails">
        {youtubeVideos.map((video, index) => (
          <a key={index} href={video.url} target="_blank" rel="noopener noreferrer">
            <img src={video.thumbnail} alt={`YouTube video ${index + 1}`} />
            <p className="youtube-p">{video.url}</p>
          </a>
        ))}
        </div>
      </div>
    </footer>
    </div>
    
  );
}

export default CategoryPage;
