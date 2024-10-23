import WeightLoss from '../assets/images/Body-Diet.jpg';
import MuscleBuilding from '../assets/images/Handsome_Shirtless.jpg';


const NutritionPlanSection = () => {
    return (
        <section className="bg-gradient-to-b from-green-900 to-black py-20 text-white">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white">Personalized Nutrition Plans</h2>
                <p className="mt-4 text-xl text-gray-300">Fuel your body with the right nutrition</p>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center justify-around">
                {/* Plan Card 1 */}
                <div className="max-w-sm bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    <img
                        src={WeightLoss}
                        alt="Weight Loss Diet"
                        className="rounded-lg mb-6 w-full h-48 object-cover"
                    />
                    <h3 className="text-4xl font-bold mb-4 text-green-400">Weight Loss Diet</h3>
                    <p className="text-lg text-gray-300 mb-6">
                        Tailored meal plans to help you achieve your weight loss goals.
                    </p>
                    <a href="#weight-loss-plan" className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-full font-bold transition duration-300">
                        Start Now
                    </a>
                </div>

                {/* Plan Card 2 */}
                <div className="max-w-sm bg-black bg-opacity-70 p-6 rounded-lg shadow-lg mt-8 md:mt-0 transform hover:scale-105 transition duration-300">
                    <img
                        src={MuscleBuilding}
                        alt="Muscle Gain Diet"
                        className="rounded-lg mb-6 w-full h-48 object-cover"
                    />
                    <h3 className="text-4xl font-bold mb-4 text-green-400">Muscle Gain Diet</h3>
                    <p className="text-lg text-gray-300 mb-6">
                        Optimize your nutrition to build lean muscle mass.
                    </p>
                    <a href="#muscle-gain-plan" className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-full font-bold transition duration-300">
                        View Plan
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NutritionPlanSection;
