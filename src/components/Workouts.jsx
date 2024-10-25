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
      className="flex flex-col justify-center items-center bg-glow-gradient p-10 rounded-3xl shadow-lg backdrop-blur-lg"
    >
      <motion.h1
        className="text-8xl font-semibold mb-6 neon-glow text-center animate-pulse"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.5 }}
      >
        Workouts
      </motion.h1>
      <motion.div 
        className="flex flex-wrap m-2 items-center justify-center gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ duration: 0.8 }}
      >
        {[{
          title: "Chest Workouts", img: batmanChest },
          { title: "Triceps Workouts", img: batmanTriceps },
          { title: "Back Workouts", img: batmanBack },
          { title: "Biceps Workouts", img: batmanBiceps },
          { title: "Shoulder Workouts", img: batmanShoulders },
          { title: "Legs Workouts", img: batmanLegs },
          { title: "Abs Workouts", img: batmanAbs },
        ].map((workout, index) => (
          <motion.div
            key={index}
            className="glass-card m-10 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Card className="relative m-2 border border-gray-700 transition-shadow">
              <motion.div
                className="overflow-hidden rounded-md animate-glow"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Card.Img
                  className="h-64 w-auto filter grayscale-[30%] hover:grayscale-0 transition duration-500 ease-in-out"
                  variant="top"
                  src={workout.img}
                />
              </motion.div>
              <Card.Body className="p-0">
                <motion.div
                  className="glass-overlay absolute bottom-0 left-0 w-full p-4 text-white text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card.Text className="text-2xl text-shadow-glow">
                    {workout.title}
                  </Card.Text>
                </motion.div>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Workouts;
