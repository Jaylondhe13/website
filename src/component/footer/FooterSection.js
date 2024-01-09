import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { footerSections } from '../../shared/constants';
import styles from './Footer.module.css'; // Assuming you've set up CSS modules

const FooterSection = () => {
    return (<footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                {footerSections.map((section, index) => (
                    <div key={index} className={styles.footerSection}>
                        <h4>{section.title}</h4>
                        <ul>
                            {section.content.map((item, idx) => (
                                <li key={idx}>
                                    {typeof item === 'string' ? item : (
                                        <>
                                            <FontAwesomeIcon icon={item.icon} /> {item.text}
                                        </>
                                    )}
                                    {(section.title === 'IMPORTANT LINKS' || section.title === 'QUICK LINKS' || section.title === 'STUDENT CORNER') && idx !== section.content.length - 1 && <span className={styles.separator}>  </span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
}

export default FooterSection;
