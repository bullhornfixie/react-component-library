import React from 'react';
import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the course Q&A'},
  ];

  // JSX
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  )
}

// const App is a component
// props means you can pass data from component A (App) to component B (GoalList)
// every component in react must return JSX 

export default App;
