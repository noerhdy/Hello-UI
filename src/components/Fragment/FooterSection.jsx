import React from "react";
import { Outlet } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import CtaLink from "./CtaLink";

const FooterSection = () => {
  return (
    <footer>
      <Outlet />
      <section className="flex justify-center py-4 items-center bg-[#f7f7f7] dark:bg-zinc-950 pb-24 ">
        <div className="w-full max-w-screen-md  border bg-zinc-100 dark:bg-zinc-950 border-zinc-400 dark:border-zinc-600  rounded-md mx-2 ">
          <div className="flex justify-between p-4 border-b border-dashed border-zinc-400 text-zinc-600 dark:border-zinc-600  dark:text-zinc-600 font-medium">
            <ToggleButton />
            <CtaLink />
          </div>
          <div className="flex justify-between p-4 text-zinc-600 dark:text-zinc-600 font-semibold">
            <p className="inline lining-nums">2024</p>
            <span className="inline cursor-pointer">
              Made by{" "}
              <p className="inline hover:text-zinc-600 text-black duration-200 dark:text-white dark:hover:text-zinc-600">
                NN
              </p>
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterSection;
