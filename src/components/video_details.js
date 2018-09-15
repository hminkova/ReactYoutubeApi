import React from 'react';

const VideoDetails = ({video}) => {

    if(!video) {
        return <p>Loading</p>;
    }
    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;

    return (
        <div className="col-md-8">
            <iframe className="video" src={url}></iframe>
            <div className="video-details">
                <h2>
                    {video.snippet.title}
                </h2>
                <p>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    );
};

export default VideoDetails;