import React from 'react';
import { useParams } from 'react-router-dom';
import {categories} from '../data'; 
import Fab from "../Fab/Fab";

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
     
    </div>
    
  );
}

export default CategoryPage;
