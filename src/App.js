import React from 'react';
import SimpleSlider from './components/simpleSlider';
import MainSlider from './components/signatureLabSlider';
import Example from './components/functionComponents';
import UseStateExample from './components/useStateExample';
import Example2 from './components/useStateExample';
import SpreadOperatorExample2 from './components/usingSpreadOperator';
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <SimpleSlider />
    // <>
    //   <MainSlider> 
    //      <div> <p> Let's go for a <FaBeer />? </p> </div>
    //      <div> <p>Slide 2</p> </div>
    //      <div> <p>Slide 3</p> </div>
    //     <div> <img src='http://placekitten.com/g/400/202' /> </div>
    //    </MainSlider>  
    // </>
  )
}

export default App; 

