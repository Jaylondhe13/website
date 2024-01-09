import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {items} from '../../shared/constants'
import styles from './PortalDashboard.module.css'

const PortalDashboardComponent = ()=>{
    return <div className={styles.navigationContainer}>
    <ul className={styles.navigationList}>
      {items.map((item, index) => (
        <li key={index} className={styles.navigationItem}>
          <FontAwesomeIcon icon={item.icon} />
          <h3 className='text-center'>{item.name}</h3>
        </li>
      ))}
    </ul>
  </div>

}

export default PortalDashboardComponent ;