import { Outlet } from "react-router-dom"
import BackgroundComponent from "../component/backGroundImage/BackgroundComponent"

const BgImageLayout = ()=>{
    return<>
    <BackgroundComponent/>
    <Outlet/>
    </>

}
export default BgImageLayout;