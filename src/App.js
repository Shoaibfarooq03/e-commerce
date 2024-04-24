import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Shop from "./pages/shop/shop";
import Detail from "./pages/detail-product/detail";
import Comparison from "./pages/comparison/comparison";
import Cart from "./pages/cart/cart";
import Checkout from "./pages/checkout/checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-detail" element={<Detail />} />
          <Route path="/product-comparison" element={<Comparison />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
