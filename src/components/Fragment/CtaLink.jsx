import React from "react";
import Button from "../Elements/Button/ButtonIndex";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { X } from "lucide-react";
import { ClipboardList } from "lucide-react";

export const colorFirst =
  "dark:text-zinc-600 dark:hover:text-black text-zinc-600 hover:text-white dark:bg-zinc-800 dark:hover:bg-neutral-200 bg-neutral-200 hover:bg-black";

const CtaLink = () => {
  return (
    <div
      className={`${colorFirst} group flex py-1 px-2 h-8 w-24 rounded duration-500 items-center hover:delay-300 hover:w-72  hover:h-12 hover:rounded-xl  hover:justify-start ease-in-out overflow-hidden`}
    >
      <span className="z-20 absolute group-hover:delay-300 translate-x-2 group-hover:duration-300">
        Lets Talk
      </span>
      <div
        className="space-x-4  opacity-0 translate-x-32 group-hover:translate-x-32 -translate-y-2 group-hover:translate-y-0 mx-2  group-hover:opacity-100 group-hover:ease-in-out 
      group-hover:delay-1000
      group-hover:duration-700 overflow-hidden group-hover:block  "
      >
        <div className="flex gap-3">
          <div className="p-1 rounded-md  dark:bg-zinc-300 dark:hover:bg-zinc-400 bg-zinc-800 hover:bg-zinc-900 ease-in-out duration-500">
            <ClipboardList className="dark:text-zinc-950" />
          </div>
          <div className="p-1 rounded-md  dark:bg-zinc-300 dark:hover:bg-zinc-400 bg-zinc-800 hover:bg-zinc-900 ease-in-out duration-500">
            <Instagram className="dark:text-zinc-950" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaLink;
