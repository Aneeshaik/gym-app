import Header from "./Header";
import Workouts from "./Workouts";
import React,{ useRef } from 'react';

const Body = () => {
  // Create a reference for the Workouts section

  const workoutRef = useRef(null);
  
  // Function to scroll to Workouts section
  
  const scrollToWorkout = () => {
    if (workoutRef.current) {

      workoutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header onWorkoutsClick={scrollToWorkout} />
      <div ref={workoutRef}>
        <Workouts />
      </div>
    </div>
  );
};

export default Body;
