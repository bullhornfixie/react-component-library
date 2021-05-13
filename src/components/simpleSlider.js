import React from 'react';
import Slider from 'react-slick';
import '../styling/simpleSlider.css';
import { Box } from 'rebass';
import styled, { keyframes } from 'styled-components';
import { FaBeer } from 'react-icons/fa'

function SimpleSlider() {
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
    margin: 20px 180px;
    opacity: 0;
    transform: translateX(100vw);
    animation: ${fadeIn} 800ms ${easing.bezier} 1000ms forwards;
    width: 70%;
    min-height: 200px;
    background: black;
  `
  
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

  class LeftNavButton extends React.Component {
    render() {
      return <button {...this.props} style={{fontSize: "40px", display: 'block', right:"40px", zIndex:"15", height:"40px", width:"40px", opacity:"1", color:"white"}}>
        <span>  <FaBeer /> </span>
        </button>;
     }
  }

  function RightNavButton(props) {
    const {className, style, onClick} = props
    return (
        <div
            className="slick-arrow"
            style={{...style, display: 'block'}}
            onClick={onClick}
        >
            <p> next</p> 
        </div>
    );
   }

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
    prevArrow: <PrevArrow />,
    nextArrow: <PrevArrow />
  };
  return (
    <div class="container">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <h2> Single Item</h2>
      <SlideContainer>
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
    </SlideContainer>
    </div>
   );
 };

export default SimpleSlider; 

