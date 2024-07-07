import { marqImage } from "@/constants";
import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  return (
    <div className="grid grid-cols-4 drop-shadow h-full rounded-md py-6 my-12  bg-zinc-200">
      <div className="col-span-5 mx-4  ">
        <Marquee pauseOnClick={false} autoFill speed={40}>
          {marqImage.map((item, i) => (
            <div
              key={i}
              className="flex max-w-[220px] overflow-hidden rounded-md space-x-2"
            >
              <img
                className="group rounded-md grayscale overflow-hidden max-w-[180px] mx-1 img brightness-50 ease-in-out duration-500 bg-center hover:filter-none bg-cover "
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
