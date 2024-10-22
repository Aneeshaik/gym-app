import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import batmanChest from "../assets/images/batman-chest.jpg";
import batmanTriceps from "../assets/images/batman-triceps.jpg";
import batmanBack from "../assets/images/batman-back.jpg";
import batmanBiceps from "../assets/images/batman-biceps.jpg";
import batmanShoulders from "../assets/images/batman-shoulders.jpg";
import batmanLegs from "../assets/images/batman-legs.jpg";
import batmanAbs from "../assets/images/batman-abs.jpg";

const Workouts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const workoutsRef = useRef(null);

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is in view
        }
      },
      {
        threshold: 0.1, // Adjust based on when you want to trigger the animation
      },
    );

    if (workoutsRef.current) {
      observer.observe(workoutsRef.current);
    }

    return () => {
      if (workoutsRef.current) {
        observer.unobserve(workoutsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={workoutsRef}
      className="flex flex-col justify-center items-center"
    >
      <motion.h1
        className="text-8xl font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }} // Initial state
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }} // Animate based on visibility
        transition={{ duration: 0.5 }} // Animation duration
      >
        Workouts
      </motion.h1>
      <div className="flex flex-wrap m-2 items-center justify-center">
        {[
          { title: "Chest Workouts", img: batmanChest },
          { title: "Triceps Workouts", img: batmanTriceps },
          { title: "Back Workouts", img: batmanBack },
          { title: "Biceps Workouts", img: batmanBiceps },
          { title: "Shoulder Workouts", img: batmanShoulders },
          { title: "Legs Workouts", img: batmanLegs },
          { title: "Abs Workouts", img: batmanAbs },
        ].map((workout, index) => (
          <div key={index} className="bg-white m-10 rounded-lg">
            <Card className="relative m-2 border border-gray-700 hover:shadow-2xl hover:shadow-sky-400 transition-shadow ">
              <Card.Img
                className="h-64 w-auto"
                variant="top"
                src={workout.img}
              />
              <Card.Body className="p-0">
                <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                  {workout.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
