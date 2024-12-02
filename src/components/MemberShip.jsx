const MemberShip = () => {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plans</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 px-6">
                {/* Plan 1 - Cultpass ELITE */}
                <div className="relative group bg-gradient-to-br from-purple-500 to-blue-600 p-8 rounded-xl text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="absolute inset-0 opacity-0 bg-black bg-opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold z-10 relative">ELITE</h3>
                    <p className="mt-4 text-lg z-10 relative">Unlimited access to all group workouts and premium facilities.</p>
                    <p className="mt-2 z-10 relative">At gyms, studios, and live online classes.</p>
                    <a href="#learn-more" className="inline-block mt-6 bg-white text-black font-bold py-2 px-6 rounded-full z-10 relative transition duration-300 hover:bg-gray-200">
                        Learn More
                    </a>
                </div>

                {/* Plan 2 - Cultpass PRO */}
                <div className="relative group bg-gradient-to-br from-yellow-400 to-red-500 p-8 rounded-xl text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="absolute inset-0 opacity-0 bg-black bg-opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold z-10 relative">PRO</h3>
                    <p className="mt-4 text-lg z-10 relative">Unlimited access to PRO gyms with personal trainers.</p>
                    <p className="mt-2 z-10 relative">Personalized workout plans and nutrition advice.</p>
                    <a href="#learn-more" className="inline-block mt-6 bg-white text-black font-bold py-2 px-6 rounded-full z-10 relative transition duration-300 hover:bg-gray-200">
                        Learn More
                    </a>
                </div>

                {/* Plan 3 - Cultpass SELECT */}
                <div className="relative group bg-gradient-to-br from-green-400 to-blue-500 p-8 rounded-xl text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="absolute inset-0 opacity-0 bg-black bg-opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-2xl font-bold z-10 relative">General</h3>
                    <p className="mt-4 text-lg z-10 relative">Access to home workouts and selected gyms.</p>
                    <p className="mt-2 z-10 relative">Live online classes and curated fitness plans.</p>
                    <a href="#learn-more" className="inline-block mt-6 bg-white text-black font-bold py-2 px-6 rounded-full z-10 relative transition duration-300 hover:bg-gray-200">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}

export default MemberShip;
