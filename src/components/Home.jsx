// src/components/Home.js

import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/hero-image.png"; // replace with actual hero image path

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <motion.div
        className="text-center p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold neon-text">
          Welcome to AMyeS FiT
        </h1>
        <p className="text-lg mt-4 max-w-lg mx-auto text-gray-300">
          Elevate your fitness journey with personalized workout plans, diet tips, and a community focused on achieving optimal health and strength.
        </p>
        <motion.button
          className="mt-8 px-6 py-3 rounded-full bg-purple-600 text-lg font-semibold hover:bg-purple-700 shadow-lg shadow-purple-500/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          Join Us Today
        </motion.button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={heroImage}
          alt="Hero"
          className="h-96 mx-auto drop-shadow-lg neon-border"
        />
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 p-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {[
          {
            title: "Custom Workouts",
            description: "Get workout plans tailored to your goals and fitness level.",
          },
          {
            title: "Nutrition Guides",
            description: "Access meal plans and nutrition tips designed to maximize your results.",
          },
          {
            title: "Track Progress",
            description: "Monitor your workouts, diet, and body measurements all in one place.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-black/70 rounded-lg shadow-lg neon-border text-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-2xl font-semibold mb-2 neon-text">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
