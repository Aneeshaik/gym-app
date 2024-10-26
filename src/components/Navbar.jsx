import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Workouts", path: "/#workouts" },
    { title: "Diet", path: "/diet" },
    { title: "Contact Us", path: "/" },
    { title: "About Us", path: "/about" },
  ];

  return (
    <>
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.p 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
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
                    <Link
                      to={item.path}
                      className="relative text-gray-300 hover:text-white transition-colors duration-300 text-lg font-semibold"
                    >
                      <span className="relative">
                        {item.title}
                        <motion.span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar