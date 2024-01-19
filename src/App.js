import Header from "./component/Header/Header";
import './App.css'
import NavigationBar from "./component/MainNavigation/NavigationBar";
import CarouselInfo from "./component/Carousel/CarouselInfo";
import CollegeInfo from "./component/CollegeInfo/CollegeInfo";
import Example from "./component/Carousel/Carousel1";
import TickerComponent from "./component/CollegeInfo/TickerComponent";
import LatestInfo from "./component/LatestInfo/LatestInfo";
import BackGroundlayout from "./component/LatestUpdate/BackGroundLayout";
import EventSection from "./component/LatesEvent/EventSection";
import MainSection from "./component/MainSection/MainSection";


import GallarySection from "./component/GallarySection/GallarySection";
import PortalDashboardComponent from "./component/GallarySection/PortalDashboardComponent";
import MessageComponent from "./component/MessageSection/MessageComponent";
import FooterSection from "./component/footer/FooterSection";
import Menu from "./component/Menu/Menu";
import JayPage from "./pages/Home";
import HomePage from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about";
import RootLayout from "./pages/root";
import BgImageLayout from "./pages/bgImage";

// import Footer from "./component/footer/Footer/";


// import LatestEvent from "./component/LatesEvent/LatestEven

const router = createBrowserRouter([
  {
    path: '', element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/',
        element: <BgImageLayout />,
        children: [
          { path: 'about', element: <AboutPage /> }
        ],
       


      }
    ]
  }

]);




const App = () => {



  return <RouterProvider router={router}>

    {/* <header>
        <Header></Header>
      </header> */}
    {/* <NavigationBar/> */}
    {/* <Menu/> */}

    {/* <CarouselInfo/> */}
    {/* <Example/>
      <CollegeInfo/>
      <LatestInfo/> */}
    {/* <TickerComponent/> */}
    {/* <MessageComponent/>
      
      <BackGroundlayout/>
      <EventSection/>
      <MainSection/>
      <GallarySection/>
      <PortalDashboardComponent/>
      <FooterSection/> */}

















  </RouterProvider>
}

export default App;
