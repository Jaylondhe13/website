import ForeGround from "./ForeGround";
import styles from './BackGroundLayout.module.css'

const BackGroundlayout = () => {
    const imageSource = "https://th.bing.com/th/id/OIP.LMCbPohyAYsFv8zmT_rwxAHaIS?rs=1&pid=ImgDetMain";
    const imageStyle = { width: "150px", height: "150px" };

    return (
        <div className={`position-relative ${styles['layout-container']}`}>
            <div className="d-flex flex-wrap justify-content-between">
                {[...Array(4)].map((_, index) => (
                    <div key={index}>
                        <img
                            src={imageSource}
                            alt={`College Logo ${index + 1}`}
                            className="img-fluid rounded-circle"
                            style={imageStyle}
                        />
                    </div>
                ))}
            </div>

            <div className="d-flex flex-wrap justify-content-between mt-5">
                {[...Array(4)].map((_, index) => (
                    <div key={index}>
                        <img
                            src={imageSource}
                            alt={`College Logo ${index + 5}`}
                            className="img-fluid rounded-circle"
                            style={imageStyle}
                        />
                    </div>
                ))}
            </div>
            {/* <LatestUpdate/>
            <OurCourses/>
             */}

             <ForeGround/>
        </div>
    );
};

export default BackGroundlayout;
