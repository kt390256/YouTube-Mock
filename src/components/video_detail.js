
//Before deciding if this class needs state
//The information inside this class, can they be obtained via props? If yes then it doesn't have a state, like video detail
//Otherwise, like user input and fetching the videos from its source, then this requires a state

//anything that can be passed down via props, doesnt need a state
//so this can be just a functional component
import React from 'react';

const VideoDetail = (props) => {

  if(!props.video){
    return <div>Loading....</div>;
  }

  const video = props.video;
  const videoId = video.id.videoId;//this will be most likely undefined because React does it instantly, and the callback in the index.js
  const url = `https://youtube.com/embed/${videoId}`;//constructor takes time to fetch info

  return(
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={url}></iframe>
          </div>

          <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
          </div>
        </div>
  );
};

export default VideoDetail;
