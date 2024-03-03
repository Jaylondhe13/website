

// ImageSlider.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slider1 from '../../assets/img/slider1.jpeg'
import slider2 from '../../assets/img/slider2.jpeg'
import slider3 from '../../assets/img/slider3.jpeg'
import slider4 from '../../assets/img/slider4.jpeg'
import slider5 from '../../assets/img/slider5.jpeg'
import slider6 from '../../assets/img/slider6.jpeg'
import slider7 from '../../assets/img/slider7.jpeg'
import slider8 from '../../assets/img/slider8.jpeg'
import './Slider.css';

const images = [
  {
    src: slider1,
    // description: 'Description for Image 1',
  },
  {
    src: slider1,
    // description: 'Description for Image 2',
  },

  {
    src: slider3
    // description: 'Description for Image 3',
  },
  {
    src: slider4,
    // description: 'Description for Image 1',
  },
  {
    src: slider5,
    // description: 'Description for Image 2',
  },

  {
    src: slider6
    // description: 'Description for Image 3',
  },
  {
    src: slider7,
    // description: 'Description for Image 1',
  },
  {
    src: slider8,
    // description: 'Description for Image 2',
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
