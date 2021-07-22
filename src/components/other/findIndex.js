import React from 'react';
import {findIndex} from 'lodash';

// using ._findIndex with lodash instead of splice in vanilla JS

const FindingIndex = () => {

  const data = [
    { Animal: 'Alligator' },
    { Animal: 'Bear' },
    { Animal: 'Snake' },
    { Animal: 'Bird' },
  ]

console.log(findIndex(data, {Animal: 'Bird'}))
       
return data.map((items) => <li>{items.Animal}</li>)
}

export default FindingIndex