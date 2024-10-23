import { Link } from "react-router-dom";
import gymHomePage from "../assets/images/gym-home-page.png";
import gymHomePagePic from "../assets/images/gym-home-page-pic.png";
import gymHome from "../assets/images/gym-home.png";

const Header = () => {
  return (
    <div className="relative h-screen flex">
      {/* Left Side - Gym Info Section */}
      <div className="w-2/5 flex items-center justify-start p-12 ml-10">
        <div className="text-white">
          <h2 className="text-3xl font-bold">Join AMyeS FiT</h2>
          <p className="text-lg mt-2">
            Welcome to{" "}
            <span className="text-blue-400 font-bold">AMyeS FiT</span>! We
            believe that fitness is more than just a routine — it's a journey of
            self-improvement, empowerment, and transformation. Our mission is to
            guide you through every step of that journey, offering customized
            workout plans and balanced nutrition guides tailored to your unique
            goals.
          </p>
          <p className="text-lg mt-2">
            Sign up today and transform your fitness journey!
          </p>
        </div>
      </div>

      {/* Logo Section - Displaying all three images */}
      <div className="w-1/2 h-full flex flex-col">
        <img
          src={gymHomePage}
          className="self-end max-w-xs pt-10 mt-10 mb-15 rounded-md h-2/5 w-full object-cover"
          alt="Gym Image 1"
        />
        <img
          src={gymHomePagePic}
          className="max-w-xs mt-25 mb-15 rounded-md h-2/5 w-full object-cover"
          alt="Gym Image 2"
        />
        <img
          src={gymHome}
          className="self-end max-w-xs pt-10 mb-15 pb-5 rounded-md h-2/5 w-full object-cover"
          alt="Gym Image 3"
        />
      </div>

      {/* Navigation Section */}
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between bg-black bg-opacity-60 shadow-md">
        <div className="flex items-center space-x-3">
          <img src={gymHomePage} alt="AMyeS FiT Logo" className="h-10" />
          <p className="text-white text-lg font-bold">AMyeS FiT</p>
        </div>
        <ul className="flex space-x-8 text-lg">
          <Link
            to="/"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/workouts"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
          >
            Workouts
          </Link>
          <Link
            to="/diet"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
          >
            Diet
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer"
          >
            About Us
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
