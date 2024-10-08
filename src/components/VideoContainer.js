import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react"
import { YOUTUBE_VEDIO_API } from "../utils/constants"
import VideoCard from "./VideoCard"
import { AddVideoCard } from "./VideoCard"

const VideoContainer = () => {
    const [video, setVedio] = useState([])
    const [filtVideo , setFiltVideo] = useState(video)

    useEffect(() => {
        getVideos()

    },[])
  
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VEDIO_API)
    
        const videos = await data?.json()
        // console.log(videos)
        setVedio(videos?.items)
        setFiltVideo(videos?.items)

    }

    return (
       
          
            <ul className="flex flex-row flex-wrap w-100">
            {video[0] && <AddVideoCard info = {video[0]}/>}
            {filtVideo.map((each) => (
                <Link to ={"/watch?v="+ each.id} key={each.id}>
                    <VideoCard  info = {each} key={each.id} />
               
                </Link>
            ))}
           

            </ul>
           

      
    )

}
export default VideoContainer