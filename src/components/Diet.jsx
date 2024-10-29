import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing icons

const dietPlans = [
  // Existing dietPlans data
];

const Diet = () => {
  const [selectedDiet, setSelectedDiet] = useState(null);
  const [showContent, setShowContent] = useState(true);
  const navigate = useNavigate();

  const handleReadMore = (index) => {
    setSelectedDiet(index);
    setShowContent(false);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleBackToPlans = () => {
    setShowContent(true);
    setSelectedDiet(null);
  };

  return (
    <div className="bg-gray-900 p-8 min-h-screen">
      <button
        onClick={handleBackToHome}
        className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-shadow py-2 px-4 mb-6 hover:opacity-80"
      >
        <FaArrowLeft className="mr-2" /> Back to Home
      </button>
      {showContent ? (
        <>
          <div className="text-center">
            <img
              src="https://cdn.vectorstock.com/i/500p/90/39/gym-interior-with-exercise-equipment-vector-48659039.jpg"
              alt="Diet Plans"
              className="w-full h-96 object-cover mb-8 rounded-lg"
            />
            <h1 className="text-3xl text-white mb-4">Diet Plans for Gym</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dietPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-lg border border-gray-600 p-6 shadow-md transition-transform transform hover:scale-105"
                style={{ height: '200px', width: '100%' }}
              >
                <h2 className="text-xl mb-1">{plan.title}</h2>
                <p className="mb-4">{plan.description}</p>
                <button
                  onClick={() => handleReadMore(index)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-shadow py-2 px-4 hover:opacity-80"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-gray-800 text-white rounded-lg border border-gray-600 p-6 mt-6">
          <h2 className="text-2xl mb-2">{dietPlans[selectedDiet].title}</h2>
          <img
            src={dietPlans[selectedDiet].imageUrl}
            alt={dietPlans[selectedDiet].title}
            className="mb-4 w-full rounded"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <p className="mb-4">{dietPlans[selectedDiet].fullText}</p>
          <button
            onClick={handleBackToPlans}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-shadow py-2 px-4 hover:opacity-80"
          >
            Back to Plans
          </button>
        </div>
      )}
    </div>
  );
};

export default Diet;
