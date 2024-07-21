import { ArrowUpRight } from "lucide-react";
import React from "react";
export const arrowHover =
  "duration-200 origin-center rotate-45 opacity-0 ease-in-out group-hover:opacity-100 group-hover:transform-none mx-1";
const CtaLink = (props) => {
  const { nameLink, link } = props;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <button
      onClick={() => handleClick(link)}
      className="flex group items-center group space-x-1 "
    >
      <h3 className=" group-hover:text-zinc-950 translate-x-5 group-hover:translate-x-0 ease-in-out duration-150 ">
        {nameLink}
      </h3>
      <ArrowUpRight
        size={20}
        className={`group-hover:text-zinc-950 ${arrowHover}`}
      />
    </button>
  );
};

export default CtaLink;
