import React from 'react';
import { motion } from 'framer-motion';
import './TickerComponent.css'; // Don't forget to create a CSS file for styling

const TickerComponent = () => {
  return (
    <div className="container">
      <motion.div className="side-by-side"
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.div className="sub-block">
          <img src="https://rscp.ac.in/wp-content/uploads/Founder-hon-shri-dhrupatraoji-sawale.jpg" alt="Founder's Image" />
        </motion.div>
        <motion.div className="sub-block">
          <p>I extend a warm welcome to all the readers & well wishers of our SSGM CoP institute. We are looking forward to consolidate our views on defining the long term goals for the future.</p>
        </motion.div>
      </motion.div>

      <motion.div className="side-by-side"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}

      >
        <motion.div className="sub-block">
          <img src="https://ssgmcop.ac.in/wp-content/uploads/2023/11/Principal_Sir.jpg" alt="principle's Image" />
        </motion.div>
        <motion.div className="sub-block">
          <p>It gives me immense pleasure to welcome you all to DGBVF’s Shri Sant Gajanan Maharaj College of Pharmacy, Buldana who is one of the budding Pharmacy institute affiliated to Sant Gadge Baba Amravati University and MSBTE in Maharashtra state engaged in the development of Pharmacy education and research. I praise you all for showing your interest in one of the most Nobel profession Pharmacy as your career option. Today Pharmacy is one of the upbringing field compared with engineering and medicine program...</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TickerComponent;
