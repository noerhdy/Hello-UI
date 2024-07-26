import React from "react";

export const HeadersPage = () => {
  return (
    <div className="flex flex-col py-8 relative text-[0.875rem] mt-16 text-neutral-950 dark:text-zinc-200 ">
      <h1 className=" font-bold">Nur Hidayat</h1>
      <div className="flex items-center py-1">
        <span className="relative flex h-2 w-2 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="font-normal text-[0.75rem] tracking-normal ms-2 text-zinc-400 dark:text-zinc-400 cursor-default">
          available for work
        </span>
      </div>
      <div className="sm:w-3/4 w-full mt-8">
        <h2 className="antialiased text-[0.875rem] leading-5 text-neutral-950 dark:text-zinc-200">
          Hi, I'm someone just starting out in the web development field. I'm
          self-taught and have a basic understanding of UI and graphic design.
          Whether I’m designing a website, product, or pitch deck, I always aim
          to sweat the details. However, I also understand that sometimes done
          is better than perfect.
        </h2>
      </div>
    </div>
  );
};
