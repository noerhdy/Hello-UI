import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../../pages";

const RoutesCon = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutesCon;
