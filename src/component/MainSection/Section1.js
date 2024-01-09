import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Section1.module.css'
const Section1 = ({ title, content, icon }) => {
//    
    return (
      <div className={styles.section}>
        <div className={styles.icon}><FontAwesomeIcon icon={icon} /></div>
        <h3>{title}</h3>
        <p>{content}</p>
        <button className="btn btn-outline-light">VIEW MORE</button>
      </div>
    );
  };

  export default Section1;