import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import SideVideoCard from "./SideVideoCard"
import { YOUTUBE_VEDIO_API } from "../utils/constants"
 
const SideContainer= () =>  {

    const [video, setVedio] = useState([])

    useEffect(() => {
        getVideos()

    },[])

     

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VEDIO_API)
    
        const videos = await data.json()
        setVedio(videos.items)
    }
 

    return (
       
      
            <ul className="m-3">
               
           
            {video.map((each) => (
                <Link to ={"/watch?v="+ each.id}>
                    <SideVideoCard  info = {each} key={each.id} />
               
                </Link>
            ))}
            </ul>
          
           

      
    )

}

  


export default SideContainer;