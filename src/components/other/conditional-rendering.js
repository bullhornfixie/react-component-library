import React from 'react';
import Copy from '../data/copy'

const Conditional = (portraitWording) => { 

return (
<div> 
  {portraitWording? <div text={Copy.formText2} /> : <div text={Copy.formText1} />}
</div>
    )
}

// < Conditional portraitWording />

export default Conditional 