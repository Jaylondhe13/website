

// ImageSlider.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Slider.css';

const images = [
  {
    src: 'https://rscp.ac.in/wp-content/uploads/flayer-450x267.jpg ',
    description: 'Description for Image 1',
  },
  {
    src: 'https://rscp.ac.in/wp-content/uploads/ecmg-day-450x267.png',
    description: 'Description for Image 2',
  },

  {
    src: 'https://rscp.ac.in/wp-content/uploads/Skill-Development-Program-2023-5-450x267.jpg',
    description: 'Description for Image 3',
  },
  // Add more images as needed
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change this interval as needed (in milliseconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="slider-container">
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
           key={currentIndex}
           initial={{ opacity: 0, x: '100%' }}
           animate={{ opacity: 1, x: '0%' }}
           exit={{ opacity: 0, x: '-100%' }}
           transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="slider-pair">
            <motion.div className="slider-item mx-4">
              <img
                src={images[currentIndex].src}
                alt={`Image ${currentIndex + 1}`}
                className="slider-image"
              />
              <div className="description-container">
                <p>{images[currentIndex].description}</p>
              </div>
            </motion.div>

            <motion.div className="slider-item">
              <img
                src={images[(currentIndex + 1) % images.length].src}
                alt={`Image ${currentIndex + 2}`}
                className="slider-image"
              />
              <div className="description-container">
                <p>{images[(currentIndex + 1) % images.length].description}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};



export default Slider;
