import { motion } from "framer-motion";
import Navbar from "./Navbar";
import batmanLogo from "../assets/images/batman-logo.png";

const Header = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen bg-gradient-to-r from-gray-900 to-black text-white"
      >
        {/* Hero Section */}
        <div className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Join{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  AMyeS FiT
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get fit and strong with our comprehensive workout programs and
                nutrition plans!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-shadow"
              >
                Start Your Journey
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="lg:w-1/2 flex justify-center"
            >
              <motion.img
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.5 }}
                src={batmanLogo}
                className="h-64 lg:h-96"
                alt="Batman Logo"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
