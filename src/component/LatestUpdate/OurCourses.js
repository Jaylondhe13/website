// OurCourses.js
import React from 'react';
import styles from './OurCourses.module.css'; // Import the CSS module
import { motion } from 'framer-motion';
import bPharm from '../../assets/img/bPharm.jpeg'
import dPharm from '../../assets/img/dPharm.jpeg'

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
              src={bPharm} 
              alt="First Course" 
              loading="lazy" 
              width="225px"
              height="300px"
            />
          </motion.div>
        </div>

        <div className={styles['top-images']}>
          <motion.div 
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            animate={{ rotate: 360, transition: { duration: 1 } }}
          >
            <img 
              src={dPharm}
              alt="Second Course" 
              loading="lazy" 
              width="225px"
              height="300px"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
