import React, { Component } from 'react';
import ytSearch from 'youtube-api-search';
import YoutubePlayer from 'react-youtube-player';

import SearchBar from './SearchBar';
import Slider from './Slider';

const API_KEY = 'AIzaSyAWYCeyEXS2SWdvqtlgQtTFvxyLkk0K7G8';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      videoId:'',
      videoPlayback:'unstarted',
      videoState:false
    };

  }

  componentWillUpdate(nextState,nextProps){
    console.log(nextState);
  }

  render() {
    let {videos, videoId, videoPlayback, videoState} = this.state;

    return (
      <div className="App">
        <SearchBar onChange={ term => this._searchVideo(term)}/>
        <Slider
          onSelect={videoId => this._playVideo(videoId)}
          onChange={() => this._stopVideo()}
          videos={videos}
        />

        {videoState &&
        <div
          className="youtubePlayer"
        >
          <YoutubePlayer
            videoId={videoId}
            playbackState={videoPlayback}
            configuration={
              {
                showinfo: 0,
                controls: 0
              }
            }
          />
          <div
            className="youtubePlayer__clickable"
            onDoubleClick={()=> this._stopVideo()}
          />
        </div>
        }
      </div>
    );
  }

  _searchVideo = (term) => {
    ytSearch({key: API_KEY, term}, (videos)=>{
      this.setState({videos});
    });
  }

  _playVideo = (videoId) => {
    this.setState({videoId:videoId,videoPlayback:'playing',videoState:true});
  }

  _stopVideo = () => {
    this.setState({videoPlayback:'unstarted',videoState:false});
  }
}

