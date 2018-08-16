import React from 'react';

const VideoListItem = (props) => {

  //Doing {video, onVideoSelect} is just pulling the stuffs out of the props

  //unpacking stuffs from the props
  const video    = props.video;/*This is an unique video from the map()*/
  const onVideoSelect = props.onVideoSelect;

  const imageUrl = video.snippet.thumbnails.default.url;

  /*the video inside onVideoSelect refers to that one parameter in that props.function in the index*/
  {/*when this is clicked, it goes all the way back to the parent*/}
  {/*inside (), you can pass an event in there, but since we are not using any clicking event, we pass nothing*/}

  return (

      <li onClick={ () => onVideoSelect(video)} className="list-group-item">
          <div className="video-list media">
            <div className="media-left">
                <img className="media-oject" src={imageUrl}/>
              </div>

              <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>{/*media-heading:title of the video*/}
              </div>
          </div>
      </li>
  )
}

export default VideoListItem;
