import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Problems.css'; 

const Problems = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    '/assets/slide1.png',
    '/assets/slide2.png',
    '/assets/slide3.png',
  ];

  return (
    <div className="carousel-section">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2500} 
        arrows={false} 
        swipeable={false} 
        draggable={false} 
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Problems;
