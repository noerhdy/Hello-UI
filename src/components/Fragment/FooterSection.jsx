import React from "react";

const FooterSection = () => {


  return (
    <footer>
      <div className="grid grid-cols-6 py-12 ">
        <div className="sm:col-start-2 sm:col-span-4 sm:mx-24 mx-6 col-span-6 col-start-1">
          <div className="flex flex-col w-full items-start space-y-8 py-8 border border-y-1 border-x-0 border-y-zinc-300 dark:border-y-zinc-800">
              <span className="text-4xl">About</span>{" "}
            <span
              className="text-4xl cursor-pointer"
            >
              X
            </span>
              <div className="flex flex-col ">
                <span className="text-lg  group-hover:invisible visible group-hover:-translate-y-4 duration-300 translate-y-3 ease-in-out tracking-tighter ">
                  lets talk
                </span>
                <span className="text-lg invisible group-hover:visible group-hover:-translate-y-4 translate-y-3 duration-300 ease-in-out tracking-tighter ">
                  lets talk
                </span>
              </div>
          </div>
          <div className="mb-32 py-4 flex flex-row text-start whitespace-nowrap cursor-default ">
            <h1 className="text-md tracking-wide">
              Thanks for Stopping by.{" "}
              <span
                className="text-zinc-300 hover:text-black dark:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer"
              >
              </span>{" "}
              |
            </h1>
            <h2 className="text-md ms-2"> 2024</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
