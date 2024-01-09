// OurCourses.js
import React from 'react';
import styles from './OurCourses.module.css'; // Import the CSS module
import { motion } from 'framer-motion';
import phd from '../../assets/img/phd.jpg'

const OurCourses = () => {
  return (
    <div className={styles['our-courses-container']}>
      {/* Part 1: Vertical Strip with "Our Courses" */}
      <div className={styles['vertical-strip']}>
        <h2>OUR COURSES</h2>
      </div>

      {/* Part 2: Images - Two above, one below at center */}
      <div className={styles['images-container']}>
        <div className={styles['top-images']}>
          <motion.div 
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            animate={{ rotate: 360, transition: { duration: 1 } }}
          >
            <img 
              src={phd} 
              alt="First Course" 
              loading="lazy" 

            />
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            animate={{ rotate: 360, transition: { duration: 1 } }}
          >
            <img 
              src={phd}
              alt="Second Course" 
              loading="lazy" 
            />
          </motion.div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
          animate={{ rotate: 360, transition: { duration: 1 } }}
          className={styles['bottom-image']}
        >
          <img 
            src={phd}
            alt="Third Course" 
            loading="lazy" 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurCourses;
