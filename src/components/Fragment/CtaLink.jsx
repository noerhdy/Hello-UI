import React from "react";
import Button from "../Elements/Button/ButtonIndex";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";

export const colorFirst =
  "dark:text-zinc-600 dark:hover:text-black text-zinc-600 hover:text-white dark:bg-zinc-800 dark:hover:bg-[#adfa1d] bg-neutral-200 hover:bg-black";

const CtaLink = () => {
  return (
    <div
      className={`${colorFirst} group flex py-1 px-2 h-8 w-24 rounded duration-500   items-center hover:delay-300 hover:w-1/2  hover:h-12 hover:rounded-xl  hover:justify-start ease-in-out overflow-hidden`}
    >
      <span className="z-20 absolute group-hover:delay-300 translate-x-2 group-hover:duration-300">
        Lets Talk
      </span>
      <div
        className="space-x-4  opacity-0 translate-x-52 group-hover:translate-x-52 -translate-y-2 group-hover:translate-y-0 mx-2  group-hover:opacity-100 group-hover:ease-in-out 
      group-hover:delay-1000
      group-hover:duration-700 overflow-hidden group-hover:block  "
      >
        <Button classname="bg-zinc-400 h-auto px-1 py-1 hover:bg-black">
          <Github />
        </Button>
        <Button classname="bg-zinc-400 h-auto px-1 py-1 hover:bg-black">
          <Github />
        </Button>
        <Button classname="bg-zinc-400 h-auto px-1 py-1 hover:bg-black">
          <Instagram />
        </Button>
      </div>
    </div>
  );
};

export default CtaLink;
