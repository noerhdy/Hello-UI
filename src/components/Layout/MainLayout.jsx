import React from "react";

import { HeadersPage } from "../Fragment/HeadersPage";
import TechSection from "../Fragment/TechSection";
import CardMain from "../Fragment/CardMain";
import MarqueeSection from "../Fragment/MarqueeSection";
import NavDoc from "../NavDoc";

const MainLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen items-center bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
      <main className="w-full max-w-screen-sm px-6">
        <HeadersPage />
        <CardMain />
        <MarqueeSection />
        <TechSection />
        <NavDoc />
      </main>
    </div>
  );
};

export default MainLayout;
