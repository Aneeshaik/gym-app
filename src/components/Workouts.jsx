import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import batmanChest from "../assets/images/batman-chest.jpg";
import batmanTriceps from "../assets/images/batman-triceps.jpg";
import batmanBack from "../assets/images/batman-back.jpg";
import batmanBiceps from "../assets/images/batman-biceps.jpg";
import batmanShoulders from "../assets/images/batman-shoulders.jpg";
import batmanLegs from "../assets/images/batman-legs.jpg";
import batmanAbs from "../assets/images/batman-abs.jpg";
import batmanbg from "../assets/images/btman1.jpg";

const WorkoutCard = ({ title, img, index }) => {
  // To toggle between hover in box
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={() => {
        setIsHover(true);
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-pointer m-4"
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
        <h3 className="text-2xl font-bold  absolute bottom-0 left-0 right-0 p-6 mb-10">
          {title}
        </h3>
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute bottom-0 left-0 right-0 p-6 text-white ${
            isHover ? "opacity-100" : "opacity-0"
          } `}
        >
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

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Workouts", path: "/" },
    { title: "Diet", path: "/" },
    { title: "Contact Us", path: "/" },
    { title: "About Us", path: "/about" },
  ];

  return (
    <>

      {/* ------------Header Section -> copied from home page -------------*/}
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-6">
        <div className="absolute top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.p
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
              >
                AMyeS FiT
              </motion.p>
              <nav>
                <ul className="flex space-x-8">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* <Link
                      to={item.path}
                      className="relative text-gray-300 hover:text-white transition-colors duration-300"
                    > */}
                      <span className="relative">
                        {item.title}
                        <motion.span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      {/* </Link> */}
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>



        {/* --------------Title section with bg image------------------ */}
        <div className="relative text-center mb-16" style={{}}>
          {/* Blurred Background */}
          <div
            style={{
              backgroundImage: `url(${batmanbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: "30vh",
              zIndex: 0,
            }}
          ></div>

          {/* Animated Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center mb-16"
          >
            <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-white   mb-6">
              Workouts
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your body with our professionally designed workout
              programs
            </p>
          </motion.div>
        </div>


        {/*---------- Workouts Section -------------- */}
        <div className="ml-48 my-20 mt-40 pt-30 text-6xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-white ">
          Explore Workouts
        </div>

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

      {/*------------ Footer --------------------- */}
      <Footer />
    </>
  );
};

export default Workouts;
