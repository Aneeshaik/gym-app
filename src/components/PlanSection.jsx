import Strengthtraining from '../assets/images/StrengthTraining.jpg';
import BodyDiet from '../assets/images/Body-Diet.jpg';
import MuscleBuilding from '../assets/images/Handsome_Shirtless.jpg';
import RunningWomen from '../assets/images/RunningWomen.jpg';
import Yoga from '../assets/images/Yoga.jpg';

const PlanSection = ()=>{
    return (
        <div className="bg-gradient-to-b from-blue-900 to-black py-16 px-8 text-white">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white">Our Exclusive Plans</h2>
                <p className="mt-4 text-xl text-gray-300">Transform your body and mind with our fitness and nutrition plans</p>
            </div>

            {/* Plans Container */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                {/* Fitness Plans Card */}
                <div className="w-full md:w-5/12 bg-gradient-to-r from-blue-700 to-blue-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    {/* Fitness Image */}
                    <img
                        src={Yoga} // Add path to your fitness image here
                        alt="Fitness"
                        className="rounded-lg mb-6 w-full h-40 object-cover"
                    />
                    <h3 className="text-3xl font-bold mb-4 text-white">Fitness Plans</h3>
                    <p className="text-lg mb-4 text-gray-200">Get fit with personalized workout plans designed to match your fitness level and goals.</p>
                    <ul className="text-gray-300 space-y-2">
                        <li>✔️ Full-body training</li>
                        <li>✔️ Strength & conditioning</li>
                        <li>✔️ Cardio & endurance</li>
                        <li>✔️ Access to elite trainers</li>
                    </ul>
                    <div className="mt-8">
                        <a href="#sign-up" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            Start Fitness Journey
                        </a>
                    </div>
                </div>

                {/* Spacer */}
                <div className="my-8 md:my-0"></div>

                {/* Nutrition Plans Card */}
                <div className="w-full md:w-5/12 bg-gradient-to-r from-green-700 to-green-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    {/* Nutrition Image */}
                    <img
                        src={BodyDiet} // Add path to your nutrition image here
                        alt="Nutrition"
                        className="rounded-lg mb-6 w-full h-40 object-cover"
                    />
                    <h3 className="text-3xl font-bold mb-4 text-white">Nutrition Plans</h3>
                    <p className="text-lg mb-4 text-gray-200">Fuel your body with custom nutrition plans tailored to your lifestyle.</p>
                    <ul className="text-gray-300 space-y-2">
                        <li>✔️ Personalized meal plans</li>
                        <li>✔️ Nutritional guidance</li>
                        <li>✔️ Recipes for all diets</li>
                        <li>✔️ 24/7 nutritionist support</li>
                    </ul>
                    <div className="mt-8">
                        <a href="#sign-up" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            Start Nutrition Plan
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanSection;
