import {Link} from "react-router-dom"
import React, { useEffect, useState } from "react"
import { YOUTUBE_VEDIO_API } from "../utils/constants"
import VideoCard from "./VideoCard"
import {useSelector} from "react-redux"
import SideBar from "./SideBar"

const WatchSearchedVideo = () => {
    const [video, setVedio] = useState([])
    const [filtVideo , setFiltVideo] = useState(video)

    const userSearch = useSelector((store) => store.searchBtn.searchedWord)
    console.log(userSearch)
   
    useEffect(() => {
        getVideos()

    },[])
  
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VEDIO_API)
        const videos = await data?.json()
        setVedio(videos?.items)
        const filterDataBasedOnUserSearch = videos?.items.filter((result) => ((result.snippet.title).toLowerCase().includes(userSearch.toLowerCase())))
        setFiltVideo(filterDataBasedOnUserSearch)

    }   
   
    return (
            <ul className="flex flex-row flex-wrap w-100">
              
                <SideBar/>
                <div className="p-2 w-100 pl-[9rem] pt-[9rem]" >
                
            {filtVideo.map((each) => (
               
                

                <Link to ={"/watch?v="+ each.id} key={each.id}>
                    <VideoCard  info = {each} key={each.id} />
               
                </Link>
               
            ))}
             </div>
             
            </ul>      
    )

}
export default WatchSearchedVideo