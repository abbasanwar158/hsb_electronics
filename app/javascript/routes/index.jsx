import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import LandingPage from "../components/LandingPage";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  </Router>
);