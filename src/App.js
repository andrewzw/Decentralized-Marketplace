import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FAQ from "./Pages/FAQ/FAQ";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Market from "./Pages/Market/Market";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
