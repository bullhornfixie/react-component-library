import React from 'react';
import Slider from 'react-slick';
import '../styling/slider.css';

function SimpleSlider() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div class="container">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <img src='http://placekitten.com/g/400/202' />
        </div>
        <div>
          <img src='http://placekitten.com/g/400/201' />
        </div>
        <div>
          <img src='http://placekitten.com/g/400/203' />
        </div>
      </Slider>
    </div>
   );
 };

export default SimpleSlider; 

