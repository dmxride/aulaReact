import React from 'react';
import ImageSlider from 'react-slick';

const SliderDumb = (props) => {

  let {videos, onSelect, onChange} = props;

  let settings = {
    dots: true,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: true,
    swipeToSlide: true,

  };

  return (
    <div className="slider">
      <ImageSlider
        afterChange={onChange}
        {...settings}
      >
        {
          videos.map((video, key) =>
            <div key={`video_${key}`}>
              <img onDoubleClick={()=>onSelect(video.id.videoId)} src={video.snippet.thumbnails.high.url} />
            </div>
          )
        }
      </ImageSlider>
    </div>
  );


}

export default SliderDumb;
