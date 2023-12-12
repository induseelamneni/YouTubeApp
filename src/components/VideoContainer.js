import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react"
import { YOUTUBE_VEDIO_API } from "../utils/constants"
import VideoCard from "./VideoCard"
import { AddVideoCard } from "./VideoCard"
import {useSelector} from "react-redux"

const VideoContainer = () => {
    const [video, setVedio] = useState([])
    const [filtVideo , setFiltVideo] = useState(video)

    useEffect(() => {
        getVideos()

    },[])

    const selectedValue = useSelector(store => store.selectedSearch.selectedValue)
    // const isBtnClicked = useSelector(store => store.searchBtn.isBtnClicked)
  
  
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VEDIO_API)
    
        const videos = await data.json()
        setVedio(videos.items)
        setFiltVideo(videos.items)

    }


    
    const filteredVideos = () => {
        let fildVideos = video?.filter((each) => ((each.snippet.title).toLowerCase().includes(selectedValue.toLowerCase())))
        setFiltVideo(fildVideos)
   }
   

    return (
       
          
            <ul className="flex flex-row flex-wrap w-100">
                {/* <button type="button" onClick={()=> filteredVideos()}>search</button> */}
            {video[0] && <AddVideoCard info = {video[0]}/>}
            {filtVideo.map((each) => (
                <Link to ={"/watch?v="+ each.id}>
                    <VideoCard  info = {each} key={each.id} />
               
                </Link>
            ))}
           

            </ul>
           

      
    )

}
export default VideoContainer