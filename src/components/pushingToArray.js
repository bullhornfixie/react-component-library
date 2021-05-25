import React from 'react';

const renderingArray = () => {

const data = [
  { Animal: 'Alligator' },
  { Animal: 'Bear' },
  { Animal: 'Snake' },
  { Animal: 'Bird' },
]

const newColumns = () => {
  data.push({ Animal: "Dog"})
}

newColumns()

return data.map((items) => <li>{items.Animal}</li>)

}

export default renderingArray