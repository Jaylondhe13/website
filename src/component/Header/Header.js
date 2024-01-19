import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderInfo from './HeaderInfo';
import { socialLinks } from '../../shared/constants';

const Header = () => {

  return <>
    <div className='header'>
      <div className='header-content'>

        <nav className='nav'>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
        </nav>
      </div>
      <ul className='social-icons'>
        {socialLinks.map((link) => (
          <li key={link.icon} className='social-icon'>
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