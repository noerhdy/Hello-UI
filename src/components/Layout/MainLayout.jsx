import React from "react";
import { HeadersPage } from "../Fragment/HeadersPage";
import FooterSection from "../Fragment/FooterSection";
import CardMain from "../Fragment/CardMain";
import NavDoc from "../NavDoc";

const MainLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen items-center bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
      <main className="w-full max-w-screen-sm px-6">
        <HeadersPage />
        <CardMain />
        <FooterSection />
        <NavDoc />
      </main>
    </div>
  );
};

export default MainLayout;
