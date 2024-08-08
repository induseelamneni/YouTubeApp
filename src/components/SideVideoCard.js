import React from 'react';

function SideVideoCard({info}) {
    
    return (
        <li className="m-2 w-90 shadow-lg flex flex-row" key={info.id} >
            <img src={info.snippet.thumbnails.high.url} alt="thumbnail" className ="rounded-lg w-44 h-44"/>
            <div className='m-2'>
            <h1 className="break-word">{info.snippet.title}</h1>
            <p className="text-xs font-thin" >{info.snippet.channelTitle}</p>
            <p className="text-xs font-thin">{info.statistics.viewCount} views</p>
            </div>
        </li>
    );
}

export default SideVideoCard
