import React, {Component} from 'react';
import VideoListItem from './video_list_item';
/*
    Ask some questions before deciding if this is a class based or function based
    1.Does it have state? Does it change by itself or by something else?
    1.1. if it is changed by something else, then that something else has a state
    2.Does it need to have initial content? like the youtube video?
    3.Is this a parent class or a child class(like video list gets content from the video class, so video list doesnt have a state)

*/


//This class doesn't have a need for state, it doesn't record any user interaction
//and it doesn't re-render itself, so this can be a functional component

//when you pass something from the parent class to a child class like here
//it will arrived as an agruement(a props)
const VideoList = (props) => {

  /*Called map() on the videos array*/
  /*add a key to the list so when react looks at it, its faster to update*/
  const videoItems = props.videos.map(video => {
    return <VideoListItem
    onVideoSelect = {props.onVideoSelect}
    key={video.etag}
    video={video}
    />
  })

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
