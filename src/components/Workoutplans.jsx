import Strengthtraining from '../assets/images/StrengthTraining.jpg';
import BodyDiet from '../assets/images/Body-Diet.jpg';
import MuscleBuilding from '../assets/images/Handsome_Shirtless.jpg';
import RunningWomen from '../assets/images/RunningWomen.jpg';
import Yoga from '../assets/images/Yoga.jpg';

const Workoutplans = () => {
    return (
        <section className="bg-gradient-to-b from-black to-blue-900 py-20 text-white">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white">Ultimate Workout Plans</h2>
                <p className="mt-4 text-xl text-gray-300">Take your fitness journey to the next level</p>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Plan Card 1 */}
                <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    <img
                        src={Strengthtraining}
                        alt="Strength Training"
                        className="rounded-lg mb-6 w-full h-48 object-cover"
                    />
                    <h3 className="text-4xl font-bold mb-4 text-blue-400">Strength Training</h3>
                    <p className="text-lg text-gray-300 mb-6">
                        Build muscle and get stronger with personalized strength training plans.
                    </p>
                    <a href="#strength-plan" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-bold transition duration-300">
                        Explore Plan
                    </a>
                </div>

                {/* Plan Card 2 */}
                <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    <img
                        src={RunningWomen}
                        alt="Cardio Program"
                        className="rounded-lg mb-6 w-full h-48 object-cover"
                    />
                    <h3 className="text-4xl font-bold mb-4 text-blue-400">Cardio Program</h3>
                    <p className="text-lg text-gray-300 mb-6">
                        Burn calories and boost your endurance with high-intensity cardio workouts.
                    </p>
                    <a href="#cardio-plan" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-bold transition duration-300">
                        Get Started
                    </a>
                </div>

                {/* Plan Card 3 */}
                <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    <img
                        src={Yoga}
                        alt="Yoga & Flexibility"
                        className="rounded-lg mb-6 w-full h-48 object-cover"
                    />
                    <h3 className="text-4xl font-bold mb-4 text-blue-400">Yoga & Flexibility</h3>
                    <p className="text-lg text-gray-300 mb-6">
                        Enhance flexibility, improve posture, and relieve stress with yoga-focused plans.
                    </p>
                    <a href="#yoga-plan" className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-bold transition duration-300">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Workoutplans;
