import React from "react";
import Landing from "./Pages/Landing";
import Announcement from "./Pages/Announcement";
import Logo from "./Pages/Logo";
import ProductDetails from './Pages/ProductDetails'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Announcement />
      <Logo />
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="productdetails" element={<ProductDetails />} />
      </Routes>

    </div>
  );
};

export default App;
