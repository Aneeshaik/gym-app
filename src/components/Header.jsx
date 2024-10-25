import { Link } from "react-router-dom";
import batmanLogo from "../assets/images/batman-logo.png";
import "../../globals.css"; // Corrected import path

const Header = () => {
  return (
    <div className="relative h-screen flex animated-bg">
      {/* Left Side - Gym Info Section */}
      <div className="flex-1 flex items-center justify-start p-12 ml-10">
        <div className="text-white">
          <h2 className="text-3xl font-bold neon-text-3d">Join AMyeS FiT</h2>
          <p className="text-lg mt-2">
            Get fit and strong with our comprehensive workout programs and
            nutrition plans!
          </p>
          <p className="text-lg mt-2">
            Sign up today and transform your fitness journey!
          </p>
        </div>
      </div>
      {/* Logo Section */}
      <div className="h-full flex items-center justify-center mr-14 pr-4 border-double logo-3d">
        <img src={batmanLogo} className="h-64 logo-img" alt="Batman Logo" />
      </div>
      {/* Navigation Section */}
      <div className="absolute top-0 left-0 right-0 p-3 flex justify-between">
        <p className="text-white neon-text-3d">AMyeS FiT</p>
        <ul className="flex space-x-20">
          <Link
            to="/"
            className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer nav-link-3d"
          >
            Home
          </Link>
          <Link
            to="/workouts"
            className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer nav-link-3d"
          >
            Workouts
          </Link>
          <Link
            to="/diet"
            className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer nav-link-3d"
          >
            Diet
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer nav-link-3d"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer nav-link-3d"
          >
            About Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
