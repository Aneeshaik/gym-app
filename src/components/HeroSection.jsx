import batmanLogo from '../assets/images/batman-abs.jpg';
import fitnessVideo from 'url:../assets/videos/fitness-nutrition.mp4';

const HeroSection = () => {
    return (
        <div className="relative h-screen flex items-center justify-center bg-black text-white">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    src={fitnessVideo}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />
                {/* Overlay for contrast */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12">
                {/* Left Side - Text Section */}
                <div className="animate-slidein opacity-0 [--slidein-delay:300ms]  flex-1 text-left md:mr-10 animate-fade-in" >
                    <h1 className="animate-slidein text-6xl font-bold mb-6 leading-tight">
                        Join <span className="text-blue-500">AMyeS FiT</span>
                    </h1>
                    <p className="text-xl mb-4 max-w-lg">
                        Get fit and strong with our comprehensive workout programs and nutrition plans.
                    </p>
                    <p className="text-xl max-w-lg">
                        Sign up today and transform your fitness journey!
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <a href="#sign-up" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            Join Now
                        </a>
                    </div>
                </div>

                {/* Right Side - Image Section */}
                {/* <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 animate-fade-in">
                    <img src={batmanLogo} className="h-80 w-auto object-contain" alt="Batman Logo" />
                </div> */}
            </div>
        </div>
    );
}

export default HeroSection;