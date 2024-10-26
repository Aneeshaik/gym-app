import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import batmanChest from "../assets/images/batman-chest.jpg";
import batmanTriceps from "../assets/images/batman-triceps.jpg";
import batmanBack from "../assets/images/batman-back.jpg";
import batmanBiceps from "../assets/images/batman-biceps.jpg";
import batmanShoulders from "../assets/images/batman-shoulders.jpg";
import batmanLegs from "../assets/images/batman-legs.jpg";
import batmanAbs from "../assets/images/batman-abs.jpg";

const WorkoutCard = ({ title, img, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-pointer m-4"
      id="workouts"
    >
      <div className="relative overflow-hidden rounded-xl">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="h-80 w-72 object-cover"
          src={img}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
        >
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to explore detailed workout plans
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Workouts = () => {
  const workouts = [
    { title: "Chest Workouts", img: batmanChest },
    { title: "Triceps Workouts", img: batmanTriceps },
    { title: "Back Workouts", img: batmanBack },
    { title: "Biceps Workouts", img: batmanBiceps },
    { title: "Shoulder Workouts", img: batmanShoulders },
    { title: "Legs Workouts", img: batmanLegs },
    { title: "Abs Workouts", img: batmanAbs },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
          Workouts
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Transform your body with our professionally designed workout programs
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {workouts.map((workout, index) => (
          <WorkoutCard key={index} {...workout} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Workouts;
