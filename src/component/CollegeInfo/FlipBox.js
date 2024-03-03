// FlipBox.js
import React from 'react';
import styles from './FlipBox.module.css'; // Import the CSS module
import infoBrochure from '../../assets/img/info-brochure.jpg'

const FlipBox = () => {
  return (
    <div className={styles.body}>
      

      <div className={styles.flipBox}>
        <div className={styles.flipBoxInner}>
          <div className={styles.flipBoxFront}>
            {/* <img className={styles.flipBoxImg} src="https://rscp.ac.in/wp-content/uploads/info-brochure1.jpg" alt="Front Image" /> */}
            {/* <img src={infoBrochure} className={styles.flipBoxImg} alt="Front Image"/> */}
            <p>Information<br></br> Browser</p>
            
          </div>
          <div className={styles.flipBoxBack} >
            {/* <img className={styles.flipBoxImg} src="https://rscp.ac.in/wp-content/uploads/info-brochure1.jpg" alt="Back Image" /> */}
            {/* <img src={infoBrochure} className={styles.flipBoxImg} alt="Back Image"/> */}
            <p>Information<br></br> Browser</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;
