import React, { useState } from 'react';

function UseStateExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // useState as an attribute of the object 
  // Similiar to an attribute of a class in JavaScript e.g. this.baseValue = 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// EQUIVALENT CLASS EXAMPLE 
class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  render() {
    return (
      <div>
        <p>You Clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Example2;
