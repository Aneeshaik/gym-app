import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 p-3 flex justify-between z-10">
      <p className="text-white">AMyeS FiT</p>
      <ul className="flex space-x-20">
        <Link to="/" className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer">
          Home
        </Link>
        <Link to="/workouts" className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer">
          Workouts
        </Link>
        <Link to="/diet" className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer">
          Diet
        </Link>
        <Link to="/contact" className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer">
          Contact Us
        </Link>
        <Link to="/about" className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer">
          About Us
        </Link>
      </ul>
    </div>
  );
};

export default Header