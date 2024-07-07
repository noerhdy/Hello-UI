import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages";
import ErorPage from "../../pages/ErorPage";
import { ThemeProvider } from "@/components/theme-provider";
import "non.geist/mono";

const RoutesCon = () => {
  return (
    <>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<ErorPage />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default RoutesCon;
