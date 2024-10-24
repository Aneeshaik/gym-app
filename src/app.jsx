import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Hero from './components/Hero';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)