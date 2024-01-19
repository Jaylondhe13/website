import { Outlet } from 'react-router-dom'
import Header from '.././component/Header/Header'
import Menu from '../component/Menu/Menu'
import FooterSection from '../component/footer/FooterSection'
import BackgroundComponent from '../component/backGroundImage/BackgroundComponent'
const RootLayout = ()=>{
    return <>
    <Header/>
    <Menu/>
    <Outlet/>
    <FooterSection/>
    
    </>
}

export default RootLayout