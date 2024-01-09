import LatestUpdate from "./LatestUpdate";
import OurCourses from "./OurCourses";
import styles from './ForeGround.module.css'

const ForeGround = ()=>{
    return (
        <div className={`${styles['foreground-container']}`}>
          <LatestUpdate />
          <OurCourses />
        </div>);

}

export default ForeGround;