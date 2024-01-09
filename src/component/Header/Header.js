import React from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderInfo from './HeaderInfo';
import { socialLinks } from '../../shared/constants';

const Header = () => {

  return <>
    <div className={`${styles.header} container`}>
      <div className={styles['header-content']}>

        <nav className={styles.nav}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </nav>
      </div>
      <ul className={styles['social-icons']}>
        {socialLinks.map((link) => (
          <li key={link.icon} className={styles['social-icon']}>
            <a href={link.url} style={{ backgroundColor: link.backgroundColor }}>
              <FontAwesomeIcon icon={link.icon} />
            </a>



          </li>
        ))}

      </ul>


    </div>
    <HeaderInfo/>
  </>





}

export default Header;