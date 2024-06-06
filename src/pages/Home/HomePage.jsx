import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import FooterSection from "../../components/Fragment/FooterSection";
import NavbarSection from "@/components/Fragment/NavbarSection";

const HomePage = () => {
  return (
    <>
      <NavbarSection />
      <MainLayout />
      <FooterSection />
    </>
  );
};

export default HomePage;
