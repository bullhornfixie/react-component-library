import React from 'react';
import SimpleSlider from './components/simpleSlider';
import MainSlider from './components/signatureLabSlider'


function App() {
  return (
    <div className="content">
      <MainSlider> 
          <div> <p>Slide 1</p> </div>
          <div> <p>Slide 2</p> </div>
          <div> <p>Slide 3</p> </div>
      </MainSlider>  
    </div>
  );
}

export default App; 

