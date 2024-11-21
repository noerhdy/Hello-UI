import { ArrowUpRight } from "lucide-react";
import React from "react";
export const arrowHover =
  "duration-200 origin-center rotate-45 text-blue-500 opacity-0 ease-in-out group-hover:opacity-100 group-hover:transform-none mx-1";
const CtaLink = (props) => {
  const { nameLink, link } = props;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <button
      onClick={() => handleClick(link)}
      className="flex items-center space-x-1 group text-zinc-950 dark:text-zinc-50"
    >
      <h3 className="text-blue-500 duration-200 ease-in-out translate-x-5  group-hover:translate-x-0">
        {nameLink}
      </h3>
      <ArrowUpRight size={20} className={` ${arrowHover}`} />
    </button>
  );
};

export default CtaLink;
