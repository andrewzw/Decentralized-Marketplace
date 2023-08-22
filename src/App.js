import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FAQ from "./Pages/FAQ/FAQ";
import Market from "./Pages/Market/Market";
import Login from "./Pages/Login/Login";
import NoMatch from "./Pages/NoMatch/NoMatch";
import './App.css';
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('isLoggedIn'));
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Login" element={<Login />} />
        {/* Shows when theres no match */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
