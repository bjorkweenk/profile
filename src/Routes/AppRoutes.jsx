import React from "react";
import { Routes, Route } from "react-router-dom";

import Splash from "../components/Splash/Splash";
import Homepage from "./../pages/HomePage/HomePage"
import Education from "../components/Education/Education";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/education" element={<Education />} />

    </Routes>
  );
};

export default AppRoutes;