// CollegeInfo.js
import { motion } from 'framer-motion';
import React from 'react';
import styles from './CollegeInfo.module.css';
import FlipBox from './FlipBox';

const CollegeInfo = () => {
    return (
        <motion.div className={`${styles.bg}`}

            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}


        >
            <div className={`${styles.collegeInfo} container`}>
                <div className={styles.info}>
                    <h4><span style={{ fontSize: "18px" }}>Welcome to Shri Sant Gajanan Maharaj, College of Pharmacy</span></h4>
                    <p>DGBVF’s Shri Sant Gajanan Maharaj College of Pharmacy is an approved college by All India Council
                        of Technical Education (AICTE), New Delhi and Pharmacy Council of India (PCI), New Delhi, Govt. of Maharashtra (Ministry of Higher and Technical Education) and Directorate of Technical Education, Mumbai
                        and is affiliated to the Sant Gadge Baba Amravati University, Amravati. The college is established in year 2019-2020 with intake capacity of 100 students for B. Pharmacy and 60 students for D. Pharmacy program.</p>
                </div>
                <div className={styles.video}>

                    {/* <iframe
                    width="560" // Set the width as needed
                    height="315" // Set the height as needed
                    src="https://youtu.be/7qR0RGqkYD8?t=47"
                    title="College Promo Video"
                    frameBorder="0"
                    allowFullScreen
                ></iframe> */}


                    {/* <iframe
                        width="420"
                        height="247"
                        src="https://www.youtube.com/embed/7qR0RGqkYD8?autoplay=1&mute=1"
                        title="Rajarshi Shahu College of Pharmacy"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe> */}


                </div>
                <div >
                    <FlipBox />
                </div>



            </div>

        </motion.div>

    );
};

export default CollegeInfo;
