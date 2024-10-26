import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Workouts from './components/Workouts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/about" element={<About />} /> 
          <Route path="/workouts" element={<Workouts />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
