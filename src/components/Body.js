import React, { useEffect, useState } from "react"
import ButtonList from "./ButtonList"
import { YOUTUBE_VEDIO_API } from "../utils/constants"
import VideoContainer from "./VideoContainer"



const Body = () => {
   

    return(
        <div className="p-2 w-100 pl-[9rem]" >
            <ButtonList/>
            <VideoContainer />
        </div>
    )

}

export default Body
// style={{paddingLeft:"150px"}}