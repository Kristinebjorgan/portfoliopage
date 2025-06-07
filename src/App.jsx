// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Papers from "./pages/Papers";
import Projects from "./pages/Projects";
import Currently from "./pages/Currently";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/papers" element={<Papers />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/currently" element={<Currently />} />
    </Routes>
  );
}
