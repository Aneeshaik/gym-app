import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Using useNavigate for navigation

const dietPlans = [
 
  {
    title: "Paleo Diet",
    description: "A diet types of foods presumed to have been eaten by early humans.",
    fullText: "The Paleo diet, also known as the caveman diet, focuses on eating whole foods that were available to our hunter-gatherer ancestors. This diet emphasizes lean meats, fish, fruits, vegetables, nuts, and seeds, while avoiding processed foods, grains, and legumes. This article explores the principles of the Paleo diet, its health benefits, meal ideas, and a thorough guide to starting your Paleo journey...",
    imageUrl: "https://images.healthshots.com/healthshots/en/uploads/2024/01/03210608/paleo.jpg", // Replace with actual image URL
  },
  {
    title: "Mediterranean Diet",
    description: "A heart-healthy diet rich in whole grains, fruits, vegetables, and healthy fats.",
    fullText: "The Mediterranean diet is a way of eating based on traditional cuisine from countries bordering the Mediterranean Sea. This diet emphasizes the consumption of whole grains, healthy fats (especially olive oil), fruits, vegetables, and lean protein sources, such as fish and poultry. Research has shown that this diet can promote heart health, weight loss, and overall wellness. In this article, we will examine the principles of the Mediterranean diet, its numerous health benefits, and provide meal plans and recipes to help you adopt this way of eating...",
    imageUrl: "https://images.everydayhealth.com/images/diet-nutrition/mediterranean-diet/mediterranean-diet-food-list-meal-plan-722x406.jpg?sfvrsn=da69b6eb_1", // Replace with actual image URL
  },
  {
    title: "Vegan Diet",
    description: "A plant-based diet that eliminates all animal products.",
    fullText: "The vegan diet is a lifestyle choice that excludes all animal products, including meat, dairy, and eggs. It is based on plant-based foods such as fruits, vegetables, grains, legumes, nuts, and seeds. This article discusses the health benefits of adopting a vegan diet, how to ensure you are getting enough nutrients, meal ideas, and tips for transitioning to a vegan lifestyle. Recipes and meal plans will also be provided to help you get started on your vegan journey...",
    imageUrl: "https://grabenord.com/cdn/shop/articles/Vegan_diet_1_1200x.jpg?v=1702118994", // Replace with actual image URL
  },
  {
    title: "Intermittent Fasting",
    description: "A dietary strategy that cycles between periods of fasting and eating.",
    fullText: "Intermittent fasting (IF) is not about what you eat but when you eat. It is an eating pattern that cycles between periods of fasting and eating. Many people use IF to lose weight, improve metabolic health, and simplify their lifestyle. This article explores the various methods of intermittent fasting, its health benefits, potential risks, and practical tips for incorporating fasting into your routine. Detailed guides and meal ideas will be provided to help you succeed with intermittent fasting...",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*jb124skHjqQncPFp.png", // Replace with actual image URL
  },
  {
    title: "Whole30",
    description: "A 30-day program to eliminate unhealthy cravings and habits.",
    fullText: "The Whole30 program is a 30-day dietary reset that focuses on whole foods while eliminating sugar, alcohol, grains, legumes, soy, and dairy. This program aims to identify food sensitivities and improve your overall relationship with food. This article will outline the rules of Whole30, provide a comprehensive guide on how to successfully complete the program, meal plans, and tips to help you navigate the process. We'll also share delicious recipes to keep your meals exciting during this challenge...",
    imageUrl: "https://blog.nasm.org/hubfs/whole30-diet-blog.jpg", // Replace with actual image URL
  },
  {
    title: "DASH Diet",
    description: "A diet designed to combat high blood pressure by focusing on whole foods.",
    fullText: "The DASH diet (Dietary Approaches to Stop Hypertension) is a dietary plan designed to help prevent and treat high blood pressure. This diet emphasizes fruits, vegetables, whole grains, and lean proteins while reducing sodium intake. This article explains the DASH diet principles, its health benefits, including weight loss and improved heart health, and offers meal ideas and tips for success. Recipes and sample meal plans will also be provided to help you start the DASH diet effectively...",
    imageUrl: "https://media.happiesthealth.com/2022/08/dash-diet.jpg", // Replace with actual image URL
  },
 
];

const Diet = () => {
  const [selectedDiet, setSelectedDiet] = useState(null);
  const [showContent, setShowContent] = useState(true); // New state to control content visibility
  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleReadMore = (index) => {
    setSelectedDiet(index);
    setShowContent(false); // Hide all other content
  };

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleBackToPlans = () => {
    setShowContent(true); // Show all content again
    setSelectedDiet(null); // Reset selected diet
  };

  return (
    <>
    <div className="bg-gray-900 p-8">
        <button 
            onClick={handleBackToHome} // Back to home logic
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-shadow py-1 px-3 hover:opacity-80  mb-6  hover:bg-blue-600"
          >
           ← Back to Home
          </button>
      {showContent ? ( // Show image and cards if content is visible
        <>
          <img 
            src="https://cdn.vectorstock.com/i/500p/90/39/gym-interior-with-exercise-equipment-vector-48659039.jpg/800x100" // Replace with the desired large image URL
            alt="Diet Plans" 
            className="w-[2400] h-96 mb-8 "
          />
          <h1 className="text-3xl text-white text-center mb-4">Diet Plans for Gym</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dietPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-lg border border-gray-600 p-6 shadow-md transition-transform transform hover:scale-105"
                style={{ height: '180px',  width:"520px"} } // Adjusted height for rectangular cards
              >
                <h2 className="text-xl mb-1">{plan.title}</h2>
                <p className="mb-7">{plan.description}</p>
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
      ) : ( // Show only the selected diet's details
        <div className="bg-gray-800 text-white rounded-lg border border-gray-600 p-6 mt-6">
          <h2 className="text-2xl mb-2">{dietPlans[selectedDiet].title}</h2>
          <img
            src={dietPlans[selectedDiet].imageUrl}
            alt={dietPlans[selectedDiet].title}
            className="mb-4 pl-2 rounded"
            style={{height:'520px'}}
          />
          <p>{dietPlans[selectedDiet].fullText}</p>
          <button
            onClick={handleBackToPlans} // Show all content again
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-shadow py-2 px-4 mt-4 hover:bg-blue-600"
          >
            Back to Plans
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default Diet;
