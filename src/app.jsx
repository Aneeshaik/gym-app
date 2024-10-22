import ReactDOM from "react-dom";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Diet from "./components/Diet";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="text-white">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/diet" element={<Diet />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
