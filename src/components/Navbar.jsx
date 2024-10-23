import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-6 flex justify-between z-10 backdrop-blur-md">
      <p className="text-white font-bold text-2xl">AMyeS FiT</p>
      <ul className="flex gap-14 font-semibold text-lg">
        <Link
          to="/"
          className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/"
          className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer"
        >
          Workouts
        </Link>
        <Link
          to="/"
          className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer"
        >
          Diet
        </Link>
        <Link
          to="/"
          className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer"
        >
          Contact Us
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer"
        >
          About Us
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
