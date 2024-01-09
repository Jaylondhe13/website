import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {informationData } from '../../shared/LatestInformation'
import './LatestInfo.css'; // Don't forget to create a CSS file for styling

const LatestInfo = () => {
    const [informationIndex, setInformationIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);



    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setInformationIndex((prevIndex) => (prevIndex + 1) % informationData.length);
            }
        }, 3000); // Change the interval duration as needed

        return () => clearInterval(interval);
    }, [isHovered]);

    const handlePrevClick = () => {
        setInformationIndex((prevIndex) => (prevIndex - 1 + informationData.length) % informationData.length);
    };

    const handleNextClick = () => {
        setInformationIndex((prevIndex) => (prevIndex + 1) % informationData.length);
    };

    const currentInformation = informationData[informationIndex];

    return (
        <div className="latest-info-container container mt-3">
            <div className='latest'>
                <p>Latest</p>
            </div>

            <div className="latest-information-part">
                <motion.p

                    
                    key={informationIndex}
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.02 }} // Adjust the scale as needed
                    onClick={() => setIsHovered(!isHovered)}


                >{currentInformation}</motion.p>
            </div>

            <div>
                <span onClick={handlePrevClick}>&#9665;</span>
                <span onClick={handleNextClick}>&#9655;</span>
            </div>
        </div>
    );
};

export default LatestInfo;
