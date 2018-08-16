import React, {Component} from 'react';//React is used to create and manage our components
import ReactDOM from 'react-dom';//ReactDOM is used to interact with the actual DOM
//Creat a new component. This component should produce some HTML
import VideoList from './components/video_list';
 import YTSearch from 'youtube-api-search';
 import VideoDetail from './components/video_detail';// import YTSearch from 'youtube-search';
import SearchBar from './components/search_bar';
import _ from 'lodash';

const API_KEY = 'AIzaSyDp0qiXh-lIzYG6DzdXc2hu5MN-FA5hFSk';

/*
  This uses a concept called downward dataflow
  IMPORTANT:Only the most parent class is responsible for fetching data
*/
//keep track of the list of videos by recording them on its state
class App extends Component {
  constructor(props){
    super(props);

    //this is what we want to change
    this.state = {
      videos: [],//this gets changed as the input changes
      selectedVideo: null //this gets change as the user clicks another video
    };//is an arrya because is a bunch of objects

    //when the app starts, this function kicks off
    //the function() causes this.setState to throw error, but => fixed that
    //need to call this.functionName() because part of the codes inside videoSearch belongs to the component
    this.videoSearch('');
  }

  videoSearch(_term) {
    YTSearch({key:API_KEY, term:_term}, (videos) => {
      //u can also do ({video}) if the key & value name are the same
    this.setState({
      videos: videos,//fills up the videos[] in state
      selectedVideo: videos[0],//default selected video(the big one on screen to the first video that comes back from the this callback)
    });
    });
  }



    render() {
      const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
      return(
        <div>
          {/*whatever comes back from onSearchTermChange downhere, passes the value to the first _term, then it passes to the second _term*/}
          <SearchBar onSearchTermChange={_term => this.videoSearch(_term)}/>
          {/*passing data from parent class to child class, known as props*/}
          {/*so everything in the video state changes, new info are passed to the VideoList*/}
          <VideoDetail video={this.state.selectedVideo} />
          {/*In this case, even tho is the videoDeatil chaning, but the index.js(parent class) is what causing the videoDetail to change*/}
          {/*video_list_item is causing the user interaction, thats why we have pass the function down there*/}
          {/*index.js controls alot of components, so this is definitely a component with state*/}
          <VideoList
          onVideoSelect = {_selectedVideo => {this.setState({selectedVideo:_selectedVideo})}}
          videos={this.state.videos} />{/*this is an array*/} {/*this changes the selectedVideo state in here*/}
        </div>
      )
    }
}

//Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector(".container"));
