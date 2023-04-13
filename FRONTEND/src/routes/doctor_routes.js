import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VetHomePage from "../views/doctor/vetHomePage";
import LearnMore from '../views/doctor/learnMoreView'


export default function doctor_routes() {
  return (
    <Router>
      <Routes>
        <Route path="/VetHomePage" exact element={<VetHomePage />}></Route>
        <Route path="/learnMore" exact element={<LearnMore />}></Route>
      </Routes>
    </Router>
  );
}
