import React from "react";

export const HeadersPage = () => {
  return (
    <div className="flex flex-col py-12 relative text-[14px] mt-12 text-neutral-950 dark:text-zinc-200 ">
      <h1 className=" font-bold">Nur Hidayat</h1>
      <div className="flex items-center py-1">
        <span className="relative flex h-2 w-2 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="font-normal tracking-normal ms-2 text-zinc-400 dark:text-zinc-300 cursor-default">
          available for work
        </span>
      </div>
      <div className="sm:w-2/3 w-full  mt-8">
        <h2 className="antialiased text-[12px] ">
          Hi, I'm someone just starting out in the web development field, I'm
          self-taught with a basic understanding of UI and graphic design.
        </h2>
      </div>
    </div>
  );
};
