import { Box } from 'rebass'
import styled, { keyframes } from 'styled-components'
import Slider from 'react-slick'
import { render } from '@testing-library/react'


const easing = {
  hover: 'all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s',
  default: '0.3s ease-in 0s',
  bezier: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
}

const fadeIn = keyframes`
	from { opacity: 0;transform:translateX(100vw)}
	to { opacity: 1;transform:translateX(0)}
`

const SlideContainer = styled(Box)`
  overflow: visible;
  margin: 20px 0;
  opacity: 0;
  transform: translateX(100vw);
  animation: ${fadeIn} 800ms ${easing.bezier} 1000ms forwards;
  width: 70%;
  min-height: 200px;
  background: white;
`
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  centerMode: true,
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const MainSlider = ({ children }) => (
  <SlideContainer> 
    <Slider {...settings}>{children}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Slider>
  </SlideContainer>
    
)

// How to render 
// <div>
// <MainSlider> 
//   <div> <p>Slide 1</p> </div>
//   <div> <p>Slide 2</p> </div>
//   <div> <p>Slide 3</p> </div>
//   <div> <img src='http://placekitten.com/g/400/202' /> </div>
// </MainSlider>  
// </div>

export default MainSlider
