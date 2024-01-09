// CarouselInfo.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../Image/Independence-Day-1.jpg';

import styles from './CarouselInfo.module.css';

const CarouselInfo = () => {
  const data = [
    { title: 'Info 1', description: 'Description 1' },
    { title: 'Info 2', description: 'Description 2' },
    // Add more data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.imageContainer}>
              <img src={image1} alt={`Carousel Image ${index + 1}`} className={styles.image} />
            </div>
            <div className={styles.infoContainer}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselInfo;
