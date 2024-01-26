import React from "react";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";
import { useReducer, useContext } from "react";

import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carts from "./components/Carts";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<Carts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
