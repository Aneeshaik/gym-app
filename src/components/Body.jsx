import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Hero from './Hero';
import Workouts from './Workouts';

const Body = () => {
  return (
    <div className="text-white">
      <Header />
      <Outlet /> 
      <Hero/>
      <Workouts/>
      <Footer />
    </div>
  );
};

export default Body;