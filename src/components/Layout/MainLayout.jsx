import React from "react";

import { HeadersPage } from "../Fragment/HeadersPage";
import TechSection from "../Fragment/TechSection";
import CardMain from "../Fragment/CardMain";
import MarqueeSection from "../Fragment/MarqueeSection";

const MainLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen items-center  bg-[#f7f7f7] dark:bg-zinc-950 ">
      <main className="w-full max-w-screen-sm bg-[#f7f7f7] dark:bg-zinc-950 px-6">
        <HeadersPage />
        <CardMain />
        <MarqueeSection />
        <TechSection />
      </main>
    </div>
  );
};

export default MainLayout;
