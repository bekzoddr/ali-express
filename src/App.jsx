import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/wishlist/Wishlist";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
