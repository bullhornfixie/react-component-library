import React from 'react';
import './GoalList.css';

const GoalList = props => {
  console.log(props.goals);
  console.log("prop received")

  // JSX
  return( 
    <ul className="goal-list">
    </ul>
  )
};

export default GoalList; 