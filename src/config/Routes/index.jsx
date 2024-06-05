import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, MainApp, RegisterPage, DetailBlog, CreateBlog, HomePage } from "../../pages";
import ErorPage from "../../pages/ErorPage";
import { ThemeProvider } from "@/components/theme-provider";

const RoutesCon = () => {
  return (
    <>
      <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<MainApp />} >
            <Route path="create-blog" element={<CreateBlog/>}/>
            <Route path="detail-blog" element={<DetailBlog/>}/>
          </Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="*" element={<ErorPage />} />
        </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default RoutesCon;
