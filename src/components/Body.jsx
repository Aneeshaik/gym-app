import Footer from "./Footer";
import Header from "./Header";
import Workouts from "./Workouts";
import HeroSection from "./HeroSection";
import MemberShip from "./MemberShip";
import PlanSection from "./PlanSection";
import Workoutplans from "./Workoutplans";
import NutritionPlanSection from "./NutritionPlanSection";

const Body = () => {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <MemberShip />
      <Workoutplans />
      <NutritionPlanSection />
      <PlanSection />
      <Workouts />
      <Footer />
    </div>
  );
};

export default Body;
