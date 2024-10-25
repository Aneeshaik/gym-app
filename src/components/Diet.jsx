// src/components/Diet.js

import React from "react";
import { motion } from "framer-motion";
import healthyIcon from "../assets/images/healthy-icon.png"; // replace with actual icon
import muscleIcon from "../assets/images/muscle-icon.png";  // replace with actual icon
import ketoIcon from "../assets/images/keto-icon.png";      // replace with actual icon

const diets = [
  {
    name: "Balanced Diet",
    icon: healthyIcon,
    description: "A balanced diet with all essential nutrients for optimal health and energy.",
    details: "Includes whole grains, lean protein, healthy fats, and a variety of fruits and vegetables.",
  },
  {
    name: "Muscle Building Diet",
    icon: muscleIcon,
    description: "High-protein diet tailored for muscle growth and strength building.",
    details: "Focused on lean meats, complex carbs, and high-protein sources like eggs, fish, and legumes.",
  },
  {
    name: "Keto Diet",
    icon: ketoIcon,
    description: "Low-carb, high-fat diet to promote fat loss and mental clarity.",
    details: "Based on fatty foods, moderate protein, and minimal carbs from vegetables and berries.",
  },
];

const Diet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white flex flex-col items-center p-8">
      <motion.h1
        className="text-5xl font-bold neon-text mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Diet Plans
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {diets.map((diet, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-black/70 shadow-lg border-2 border-purple-500 neon-border hover:shadow-purple-500/50 transition-shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={diet.icon} alt={diet.name} className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-center neon-text">{diet.name}</h2>
            <p className="text-center mb-4">{diet.description}</p>
            <p className="text-sm text-gray-400 text-center">{diet.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Diet;
