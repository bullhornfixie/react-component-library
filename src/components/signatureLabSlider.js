import { Box } from 'rebass'
import styled, { keyframes } from 'styled-components'
import Slider from 'react-slick'
import { render } from '@testing-library/react'
import { FaBeer } from 'react-icons/fa'

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
  padding-left: 0px;
  position: absolute;
  margin: 20px 180px;
  opacity: 0;
  transform: translateX(100vw);
  animation: ${fadeIn} 800ms ${easing.bezier} 1000ms forwards;
  width: 70%;
  min-height: 200px;
  background: black;
`
const PrevArrow = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <FaBeer size={30} color="#000" />
    </div>
   );
  }

const settings = {
  centerMode: false,
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  nextArrow: <PrevArrow />,
  prevArrow: <PrevArrow />
};

const MainSlider = ({ children }) => (
  <SlideContainer> 
    <Slider {...settings}>{children}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Slider>
  </SlideContainer>
    
)

// // How to render 
// <>
// <MainSlider> 
//    <div> <p> Let's go for a <FaBeer />? </p> </div>
//    <div> <p>Slide 2</p> </div>
//    <div> <p>Slide 3</p> </div>
//   <div> <img src='http://placekitten.com/g/400/202' /> </div>
//  </MainSlider>  
// </> 


export default MainSlider
