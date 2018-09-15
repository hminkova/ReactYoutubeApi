import React from 'react';
import VideoListItems from './video_list_item';

const VideoList = (props) => {
    const VideoItems = props.videos.map((video) => {
        return (
            <VideoListItems 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul className="video-list">
            {VideoItems}
        </ul>
    );
}

export default VideoList;