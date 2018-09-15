import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.channelTitle;
    const videoDescription = video.snippet.description;

    return ( 
        <li onClick={() => onVideoSelect(video)}>
            <img src={imageURL} className="video-list-img" />
            <div className="video-list-title"> {videoTitle} </div>
            <div className="video-list-text"> {videoDescription} </div>
        </li> 
    );
}

export default VideoListItem;