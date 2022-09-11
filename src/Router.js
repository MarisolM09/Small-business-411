import React from "react";
import { Routes, Route } from "react-router-dom";
import Listings from "./components/Listings";
import Login from "./components/Login";
import PizzaListing from "./components/PizzaListing";
import CoffeeListing from "./components/CoffeeListing"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Listings />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/pizzalisting" element={<PizzaListing />}></Route>
      <Route path="/coffeelisting" element={<CoffeeListing />}></Route>
    </Routes>
  );
};

export default Router;
