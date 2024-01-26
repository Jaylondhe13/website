import './App.css'
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
