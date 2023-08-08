import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FAQ from "./Pages/FAQ/FAQ";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Market from "./Pages/Market/Market";
import NoMatch from "./Pages/NoMatch/NoMatch";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Market" element={<Market />} />
        {/* Shows when theres no match */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
