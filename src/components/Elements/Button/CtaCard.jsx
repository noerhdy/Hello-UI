import React from "react";
const CtaCard = (props) => {
  const { nameLink, link } = props;
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <button
      onClick={() => handleClick(link)}
      className="flex group items-center dark:bg-zinc-800  dark:hover:bg-zinc-800/50 bg-zinc-200  hover:bg-zinc-200/50 rounded-lg px-4 py-1"
    >
      <h3 className=" font-medium text-blue-500 text-[0.85rem]">{nameLink}</h3>
    </button>
  );
};

export default CtaCard;
