import batmanLogo from "../assets/images/batman-logo.png";

const Hero = () => {
  return (
    <div className="relative h-screen flex">
      {/* Left Side - Gym Info Section */}
      <div className="flex-1 flex items-center justify-start p-12 ml-10">
        <div className="text-white">
          <h2 className="text-3xl font-bold">Join AMyeS FiT</h2>
          <p className="text-lg mt-2">
            Get fit and strong with our comprehensive workout programs and nutrition plans!
          </p>
          <p className="text-lg mt-2">Sign up today and transform your fitness journey!</p>
        </div>
      </div>
      {/* Logo Section */}
      <div className="h-full flex items-center justify-center mr-14 pr-4 border-double">
        <img src={batmanLogo} className="h-64" alt="Batman Logo" />
      </div>
    </div>
  );
};

export default Hero;