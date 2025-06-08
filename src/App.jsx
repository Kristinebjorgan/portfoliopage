// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Papers from "./pages/Papers";
import Projects from "./pages/Projects";
import Currently from "./pages/Currently";
import PaperView from "./pages/PaperView"; 
import ProjectView from "./pages/ProjectView";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/papers" element={<Papers />} />
      <Route path="/papers/:id" element={<PaperView />} />{" "}
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectView />} />
      <Route path="/currently" element={<Currently />} />
    </Routes>
  );
}
