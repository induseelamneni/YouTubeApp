import React from 'react';

function VideoCard({info}) {
    
    return (
        <li className="m-2 w-80 flex-wrap shadow-lg" key={info.id} >
            <img src={info.snippet.thumbnails.high.url} alt="thumbnail" className ="rounded-lg"/>
            <h1 className="break-word">{info.snippet.title}</h1>
            <p className="text-xs font-thin" >{info.snippet.channelTitle}</p>
            <p className="text-xs font-thin">{info.statistics.viewCount} views</p>

        </li>
    );
}

export const  AddVideoCard = ({info}) => {
    return (
        <div>
             <h1 className='absolute mx-5 text-center bg-white my-10'>Ads</h1>
           <VideoCard  info={info}/>
          
        </div>
  
    )
}

export default VideoCard;