import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";

const App = () => {
  return (
    <Router>
      <div className="text-white">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
