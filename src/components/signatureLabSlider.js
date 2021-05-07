import { Box } from 'rebass'
import styled, { keyframes } from 'styled-components'
import Slider from 'react-slick'

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
  overflow: hidden;
  margin: 10px 0;
  opacity: 0;
  transform: translateX(100vw);
  animation: ${fadeIn} 800ms ${easing.bezier} 1000ms forwards;
`
const settings = {
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const MainSlider = ({ children }) => (
  <SlideContainer>
    <Slider {...settings}>{children}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <div> 
        <img src='http://placekitten.com/g/400/202' />
      </div>
      <div> 
        <img src='http://placekitten.com/g/400/202' />
      </div>
    </Slider>
  </SlideContainer>
)
export default MainSlider
