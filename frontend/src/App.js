import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./portfolio/Home";
import Navbar from "./portfolio/Navbar";
import Resume from "./portfolio/Resume";
import Projects from "./portfolio/Projects";
import"./App.css"

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
}

export default App;
