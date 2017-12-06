import React, {Component} from 'react';
import ImageSlider from 'react-slick';

export default class Slider extends Component{
  constructor(props){
    super(props);

    this.state = {
      selectedVideo:0
    }

  }

  render(){
    let {videos, onSelect} = this.props;

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      touchMove: true,
      swipeToSlide: true
    };

    return (
      <div className="slider">
        <ImageSlider
          afterChange={(videoIndex)=>this.setState({selectedVideo:videoIndex})}
          ref={(slider)=>this.slider=slider}
          {...settings}
        >
          {
            videos.map((video, key) =>
              <div key={`video_${key}`}>
                <img
                  onDoubleClick={()=>onSelect(video.id.videoId)}
                  src={video.snippet.thumbnails.high.url}
                />
              </div>
            )
          }
        </ImageSlider>
      </div>
    );
  }

  componentDidMount(){
    document.addEventListener('keydown', this._handleKey);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this._handleKey);
  }

  _handleKey = (event) => {
    let {onChange, onSelect, videos} = this.props;
    let {selectedVideo} = this.state;

    onChange();

    switch (event.keyCode){
      case 37:
        this.slider.slickPrev();
        break;
      case 39:
        this.slider.slickNext();
        break
      case 13:
        onSelect(videos[selectedVideo].id.videoId)
    }

  }

}
