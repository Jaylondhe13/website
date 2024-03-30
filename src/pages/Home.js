import Carousel from "../component/Carousel/Carousel1";
import CollegeInfo from "../component/CollegeInfo/CollegeInfo";
import GallarySection from "../component/GallarySection/GallarySection";
import PortalDashboardComponent from "../component/GallarySection/PortalDashboardComponent";

import EventSection from "../component/LatesEvent/EventSection";
import LatestInfo from "../component/LatestInfo/LatestInfo";
import BackGroundlayout from "../component/LatestUpdate/BackGroundLayout";
import ForeGround from "../component/LatestUpdate/ForeGround";
import MainSection from "../component/MainSection/MainSection";

import MessageComponent from "../component/MessageSection/MessageComponent";


const HomePage = () => {
    return <>

       
        <Carousel />
        <CollegeInfo />
        <LatestInfo />
        <MessageComponent />

        {/* <BackGroundlayout /> */}
        <ForeGround/>
        <EventSection />
        <MainSection />
        {/* <GallarySection /> */}
        {/* <PortalDashboardComponent /> */}
       


    </>
}

export default HomePage;