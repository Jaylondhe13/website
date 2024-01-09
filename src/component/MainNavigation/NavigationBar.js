// NavigationBar.js

import React, { useState } from 'react';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [blogContent, setBlogContent] = useState({
    'Home': 'Blog content for Home',
    'About Us': 'Blog content for About Us',
    'Academics': 'Blog content for Academics',
    'Admissions': 'Blog content for Admissions',
    'Students Corner': 'Blog content for Students Corner',
    'Committee': 'Blog content for Committee',
    'Gallery': 'Blog content for Gallery',
    'Online Payment': 'Blog content for Online Payment',
    'Other': 'Blog content for Other',
  });

  const handleBlogHover = (item) => {
    setHoveredItem(item);
  };

  const handleBlogLeave = () => {
    setHoveredItem(null);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.menuToggle} onClick={handleMenuToggle}>
        &#9776; {/* Three horizontal lines symbol */}
      </div>
      <div className={`${styles.menuItems} ${isMenuOpen ? styles.active : ''}`}>
        {Object.keys(blogContent).map((item) => (
          <div
            key={item}
            className={styles.menuItem}
            onMouseEnter={() => handleBlogHover(item)}
            onMouseLeave={handleBlogLeave}
          >
            {item}
          </div>
        ))}
      </div>
      {hoveredItem && (
        <div className={`${styles.blogContainer} ${hoveredItem ? styles.active : ''}`}>
          {/* Display blog content based on the hoveredItem */}
          <p>{blogContent[hoveredItem]}</p>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
