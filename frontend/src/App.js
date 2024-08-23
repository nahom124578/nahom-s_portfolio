import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./portfolio/Home";
import Navbar from "./portfolio/Navbar";
import Resume from "./portfolio/Resume";
import Projects from "./portfolio/Projects";
import Contact from "./portfolio/Contact"; // Assuming you have a Contact component

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
