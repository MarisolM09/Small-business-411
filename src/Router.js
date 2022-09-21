import React from "react";
import { Routes, Route } from "react-router-dom";
// import cookie from 'cookie';
import Listings from "./components/Listings";
import Login from "./components/Login";
import PizzaListing from "./components/PizzaListing";
import CoffeeListing from "./components/CoffeeListing";
import AddListing from "./containers/AddListing"
import ProtectedListings from "./containers/ProtectedListings";

// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie)
//   return cookies["loggedIn"] ? true : false
// }

// const ProtectedRoute = (props) => {
//   const { component : Component } = props;

//   return checkAuth() === true ? <Component /> : <Navigate to="/login" />
// }

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Listings />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/pizzalisting" element={<PizzaListing />}></Route>
      <Route path="/coffeelisting" element={<CoffeeListing />}></Route>
      <Route path="/protectedlisting" element={<ProtectedListings />}></Route>
      <Route path="/addlisting" element={<AddListing />}></Route>
    </Routes>
  );
};

export default Router;
