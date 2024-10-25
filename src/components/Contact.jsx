// src/components/Contact.js

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white px-6 py-12">
      <motion.h1
        className="text-5xl font-bold mb-8 neon-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-lg mb-12 text-center max-w-lg neon-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We’d love to hear from you! Send us a message and let’s get in touch.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-opacity-80 bg-black p-6 rounded-lg shadow-lg neon-border"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <div className="mb-6">
          <label className="block text-sm mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border-2 border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-transparent border-2 border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 h-32 bg-transparent border-2 border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full py-2 mt-4 bg-purple-600 rounded-lg text-white font-semibold hover:bg-blue-600 neon-border"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
