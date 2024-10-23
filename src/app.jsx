import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About";
import Workouts from "./components/Workouts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Body />}>
          
          <Route index element={<Workouts />} /> 
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
