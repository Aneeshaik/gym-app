import batmanLogo from "../assets/images/batman-logo.png"

const Header = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute top-0 left-0 right-0 p-3 flex justify-between">
                <p>AMyeS FiT</p>
                <ul className="flex space-x-20">
                    <li>Home</li>
                    <li>Workouts</li>
                    <li>Diet</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="h-full flex items-center justify-center">
                <img src={batmanLogo} className="h-64" alt="Lion Logo" />
            </div>
        </div>
    );
}


export default Header;