import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./pages/navbar/navbar";
import Home from "./pages/home/home";
import Footer from "./pages/footer/footer";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
