import React from 'react';

const SpreadOperatorExample = () => {
  return ( 
    <p> firstName="Mad" lastName="Dog" </p> 
  )
}

const SpreadOperatorExample2 = () => {
  const props = {firstName: 'Mad', lastName: 'Dog'};
  return (
    <p {...props} />
  )
}

export default SpreadOperatorExample2;
