import React from 'react'
import Slider from 'react-slick'

import sliderImage1 from '../../assets/slider-image-1.jpeg';
import sliderImage2 from '../../assets/slider-image-2.jpeg';

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
          <div>
            <img src={sliderImage1} alt="sliderImage1" />
          </div>
          <div>
            <img src={sliderImage2} alt="sliderImage2" />
          </div>
      </Slider>
    </div>
  )
}

export default SliderComp