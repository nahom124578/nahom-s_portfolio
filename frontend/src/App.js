import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


function App() {
    return (
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element= {<Homepage />} />
    <Route path="/Resume" elemnt ={<Resume />} />
  </Routes>
</Router>

    
  );
}

export default App;
