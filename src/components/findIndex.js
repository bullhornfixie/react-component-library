import React from 'react';
import _findIndex from 'lodash/findIndex';

// using ._findIndex with lodash instead of splice in vanilla JS

const FindingIndex = () => {

  const data = [
    { Animal: 'Alligator' },
    { Animal: 'Bear' },
    { Animal: 'Snake' },
    { Animal: 'Bird' },
  ]

const _ = require('lodash')
console.log(_.findIndex(data, {Animal: 'Bird'}))
       
return data.map((items) => <li>{items.Animal}</li>)
}

export default FindingIndex