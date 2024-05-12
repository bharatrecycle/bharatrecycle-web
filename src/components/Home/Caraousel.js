import React, { useState } from 'react';

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevious}>&lt;</button>
      <div className="carousel-slide">
        <img src={data[currentSlide].imgSrc} alt={`Slide ${currentSlide}`} />
        <p>{data[currentSlide].description}</p>
      </div>
      <button className="right-btn" onClick={goToNext}>&gt;</button>
    </div>
  );
};
export default Carousel;