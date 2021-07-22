import React from 'react';

const renderingArray = () => {

  const variable = "x"

  const data = [
    { Animal: 'Alligator' },
    { Animal: 'Bear' },
    { Animal: 'Snake' },
    { Animal: 'Bird' },
  ]

  const newColumns = () => {
    if (variable === "x") {
      data.splice(3, 0, {Animal: 'Dog'})
    }
  }
  // data.splice(position, item)

  newColumns()
  // calling function within component 

  return data.map((items) => <li>{items.Animal}</li>)
}

export default renderingArray