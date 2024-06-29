import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./portfolio/Home";
import Navbar from "./portfolio/Navbar"
import Resume from "./portfolio/Resume"
import Projects from "./portfolio/Projects"
function App() {
    return (
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element= {<Home />} />
    <Route path="/Resume" elemnt ={<Resume />} />
  </Routes>
</Router>

    
  );
}

export default App;
