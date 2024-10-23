import { NavLink } from "react-router-dom";
import batmanLogo from "../assets/images/batman-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDumbbell, faAppleAlt, faPhone, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="relative h-screen flex flex-col lg:flex-row">
            {/* Left Side - Gym Info Section */}
            <div className="flex-1 flex items-center justify-start p-12 ml-10">  
                <div className="text-white">
                    <h2 className="text-3xl font-bold">Join AMyeS FiT</h2>
                    <p className="text-lg mt-2">
                        Get fit and strong with our comprehensive workout programs and nutrition plans!
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
            <nav className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-black bg-opacity-50">
                <p className="text-white text-xl font-semibold">AMyeS FiT</p>
                <ul className="hidden lg:flex space-x-8 text-white">
                    <NavLink exact to="/" className="flex items-center hover:text-blue-500 hover:underline" activeClassName="text-blue-500">
                        <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                    </NavLink>
                    <NavLink to="/workouts" className="flex items-center hover:text-blue-500 hover:underline" activeClassName="text-blue-500">
                        <FontAwesomeIcon icon={faDumbbell} className="mr-2" /> Workouts
                    </NavLink>
                    <NavLink to="/diet" className="flex items-center hover:text-blue-500 hover:underline" activeClassName="text-blue-500">
                        <FontAwesomeIcon icon={faAppleAlt} className="mr-2" /> Diet
                    </NavLink>
                    <NavLink to="/contact" className="flex items-center hover:text-blue-500 hover:underline" activeClassName="text-blue-500">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" /> Contact Us
                    </NavLink>
                    <NavLink to="/about" className="flex items-center hover:text-blue-500 hover:underline" activeClassName="text-blue-500">
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About Us
                    </NavLink>
                </ul>

                
                <div className="lg:hidden text-white">MENU</div>
            </nav>
        </div>
    );
}

export default Header;
