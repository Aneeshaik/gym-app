import { Link } from "react-router-dom";
import batmanLogo from "../assets/images/batman-logo.png";


const Header = () => {


  return (
    <div className="relative h-screen flex">
      {/* Left Side - Gym Info Section */}
      <div className="flex-1 flex items-center justify-start p-12 ml-10">
        <div className="text-white">
          <h2 className="text-3xl font-bold">Join AMyeS FiT</h2>
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
      <div className="h-full flex items-center justify-center mr-14 pr-4 border-double">
        <img src={batmanLogo} className="h-64" alt="Batman Logo" />
      </div>
      {/* Navigation Section */}
      <div className="absolute top-0 left-0 right-0 p-3 flex justify-between">
      
        <p className="text-white">AMyeS FiT</p>
        <ul className="flex space-x-20">
          <Link
            to="/"
            // className="hover:text-white-500"
          >
           <button className="bg-grey p-4 hover:text-red-500 hover:bg-gray-100 rounded-xl">Home</button>
          </Link>
          <Link
            to="/"
           
          >
           <button className="bg-grey p-4 hover:text-red-500 hover:bg-gray-100 rounded-xl">Workouts</button>
          </Link>
          <Link
            to="/"
         
          >
          <button className="bg-grey p-4 hover:text-red-500 hover:bg-gray-100 rounded-xl">Diet</button>
          </Link>
          <Link
            to="/"
           
          >
         <button className="bg-grey p-4 hover:text-red-500 hover:bg-gray-100 rounded-xl">Contact Us</button>
          </Link>
          <Link
            to="/about"
           
          >
          <button className="bg-grey p-4 hover:text-red-500 hover:bg-gray-100 rounded-xl">About Us</button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
