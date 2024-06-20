import React from "react";

export const HeadersPage = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="w-full max-w-screen-md bg-[#f7f7f7] dark:bg-zinc-950 text-balance">
      <div className="flex flex-col text-center justify-center py-12 relative items-center  ">
        <img
          className="object-cover w-auto bg-center dark:opacity-5"
          src="imageBlog/line-pattern.png"
        ></img>
        <div className="flex w-full z-10 h-full absolute flex-col justify-center space-y-4">
          <div className="font-bold sm:text-7xl text-6xl cursor-default text-black text-balance antialiased dark:text-white">
            <h1 className="mx-16">{title}</h1>
          </div>
          <p className="text-xl text-black dark:text-zinc-600 text-pretty">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
