import { ArrowUpRight } from "lucide-react";
import React from "react";
const CtaCard = (props) => {
  const { nameLink, link } = props;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <button
      onClick={() => handleClick(link)}
      className="flex group items-center   dark:bg-zinc-200  dark:hover:bg-zinc-100 bg-zinc-900   hover:bg-zinc-800 rounded-lg px-4 py-1"
    >
      <h3 className=" font-medium text-blue-500 text-[0.85rem]">{nameLink}</h3>
      {/* <ArrowUpRight size={18} className="text-blue-500" /> */}
    </button>
  );
};

export default CtaCard;
