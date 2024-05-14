import React from 'react';
import { categories2 } from '../data'; 
import './CategoryPage2.css'; 

const CategoryPage2 = () => {
  return (
    <div className="category-page">
      {categories2.map(category => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          {category.items.map((item, index) => (
            <div key={item.id} className={`content-item ${index % 2 === 0 ? "content-image-right" : "content-image-left"}`}>
              <div className="content-image">
                <img src={item.imageUrl} alt={`Item ${item.id}`} />
              </div>
              <div className="content-description">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CategoryPage2;
