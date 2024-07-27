import { marqImage } from "@/constants";
import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  return (
    <div className="grid grid-cols-4 appearance-none shadow-xl h-full rounded-xl py-6 my-6  dark:bg-zinc-900 bg-zinc-100">
      <div className="col-span-5 mx-4  ">
        <Marquee pauseOnClick={false} autoFill speed={50}>
          {marqImage.map((item, i) => (
            <div
              key={i}
              className="flex max-w-[220px] overflow-hidden rounded-md space-x-2"
            >
              <img
                className="group rounded-lg grayscale overflow-hidden max-w-[180px] mx-1  brightness-50 ease-in-out duration-500 bg-center hover:filter-none bg-cover "
                src={item.image}
              ></img>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSection;
