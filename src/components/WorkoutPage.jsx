// src/pages/WorkoutPage.js

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

const WorkoutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const workoutsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (workoutsRef.current) observer.observe(workoutsRef.current);

    return () => {
      if (workoutsRef.current) observer.unobserve(workoutsRef.current);
    };
  }, []);

  return (
    <div ref={workoutsRef} className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.h1
        className="text-center text-5xl md:text-8xl font-extrabold py-12 neon-glow animate-glow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
        transition={{ duration: 1 }}
      >
        Our Workouts
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {[
          { title: "Chest Workouts", img: batmanChest },
          { title: "Triceps Workouts", img: batmanTriceps },
          { title: "Back Workouts", img: batmanBack },
          { title: "Biceps Workouts", img: batmanBiceps },
          { title: "Shoulder Workouts", img: batmanShoulders },
          { title: "Legs Workouts", img: batmanLegs },
          { title: "Abs Workouts", img: batmanAbs },
        ].map((workout, index) => (
          <motion.div
            key={index}
            className="m-4 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            whileHover={{ scale: 1.05 }}
          >
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <Card.Img
                src={workout.img}
                alt={workout.title}
                className="h-64 object-cover hover:opacity-80"
              />
              <Card.Body className="p-0">
                <Card.Text className="text-center py-3 text-xl bg-opacity-70 bg-black text-white">
                  {workout.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPage;
