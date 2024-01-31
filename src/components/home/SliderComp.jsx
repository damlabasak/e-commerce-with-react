import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const SliderComp = ({ settings, images, clickEvent }) => {
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} onClick={clickEvent}>
            <img src={image} alt={`sliderImage${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

SliderComp.propTypes = {
  settings: PropTypes.object.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickEvent: PropTypes.func,
};

export default SliderComp;
