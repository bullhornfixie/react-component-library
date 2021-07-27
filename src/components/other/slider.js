import Slider from 'react-slick'

const settings = {
  arrows: false,
  draggable: true,
  dots: true,
  infinite: true,
  pauseOnDotsHover: true,
  pauseOnFocus: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  swipe: true,
  touchMove: true,
}

const SliderWrapper = ({ children }) => (
  <Slider {...settings}>{children}</Slider>
)

export default SliderWrapper

// CSS
// .slick-dots {
//   position: absolute;
//   bottom: 0;
//   margin: ${spacing.md}px 0;
//   padding: 0;
//   width: 100%;
//   text-align: center;
//   li {
//     display: inline-block;
//     width: 10px;
//     height: 10px;
//     margin: 0 ${spacing.xs}px;
//     button {
//       display: block;
//       width: 12px;
//       height: 12px;
//       background: ${colors.white};
//       border: none;
//       border-radius: 100%;
//       text-indent: -99999px;
//       appearance: none;
//       -webkit-appearance: none
//       font-size: 0; 
//     }
//     &.slick-active {
//       button {
//         background: ${colors.pvBlue};
//       }
//     }
//   }
// }
