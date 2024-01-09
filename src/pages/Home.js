import Example from "../component/Carousel/Carousel1";
import CollegeInfo from "../component/CollegeInfo/CollegeInfo";
import GallarySection from "../component/GallarySection/GallarySection";
import PortalDashboardComponent from "../component/GallarySection/PortalDashboardComponent";
import Header from "../component/Header/Header";
import EventSection from "../component/LatesEvent/EventSection";
import LatestInfo from "../component/LatestInfo/LatestInfo";
import BackGroundlayout from "../component/LatestUpdate/BackGroundLayout";
import MainSection from "../component/MainSection/MainSection";
import Menu from "../component/Menu/Menu";
import MessageComponent from "../component/MessageSection/MessageComponent";
import FooterSection from "../component/footer/FooterSection";

const HomePage = () => {
    return <>

        {/* <header>
            <Header></Header>
        </header> */}
        {/* <NavigationBar/> */}
        {/* <Menu /> */}

        {/* <CarouselInfo/> */}
        <Example />
        <CollegeInfo />
        <LatestInfo />
        {/* <TickerComponent/> */}
        <MessageComponent />

        <BackGroundlayout />
        <EventSection />
        <MainSection />
        <GallarySection />
        <PortalDashboardComponent />
        <FooterSection />


    </>
}

export default HomePage;