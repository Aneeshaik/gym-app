import { Link } from "react-router-dom";
import batmanLogo from "../assets/images/batman-trainer.png";

const Header = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center opacity-1"
      style={{ backgroundImage: `url(${batmanLogo})` }} // Image as background
    >
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col gap-1 lg:gap-4 items-center justify-center text-center text-white px-4">
        <h2 className="text-4xl lg:text-[96px] font-semibold mb-1 lg:mb-8">Join AMyeS FiT</h2>
        <p className="text-base lg:text-lg mb-2">
          Get fit and strong with our comprehensive workout programs and
          nutrition plans!
        </p>
        <button className="w-[165px] h-12 bg-white text-black ">Sign up today</button>
        {/* <p className="text-lg mb-4">
          Sign up today and transform your fitness journey!
        </p> */}
      </div>

      {/* Navigation Section */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between text-white lg:mr-[104px] lg:mt-4">
        <p className="text-xl font-bold">AMyeS FiT</p>
        <ul className="flex space-x-8">
          <Link
            to="/"
            className="hover:text-blue-500 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/"
            className="hover:text-blue-500 cursor-pointer"
          >
            Workouts
          </Link>
          <Link
            to="/"
            className="hover:text-blue-500 cursor-pointer"
          >
            Diet
          </Link>
          <Link
            to="/"
            className="hover:text-blue-500 cursor-pointer"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 cursor-pointer"
          >
            About Us
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;