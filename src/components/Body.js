import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"
import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"



const Body = () => {


    return(
        <>
        <div className="flex flex-row">
        <SideBar />
        <Outlet />
       
        </div>
        <div className="p-2 w-100 pl-[9rem]" >
            <ButtonList/>
            <VideoContainer />
        </div>
        </>
    )

}

export default Body