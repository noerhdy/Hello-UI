import { dataTech } from "@/constants";
import React from "react";
import CtaLink from "../Elements/Button/CtaLink";

const TechSection = () => {
  return (
    <>
      <div className="py-12 border-y-2  ">
        <div className="text-zinc-400 items-center py-2 text-sm">
          <h2 className="text-[12px]">Tech Stack</h2>
        </div>
        {dataTech.map((item, index) => (
          <div key={index} className="flex w-full space-x-10 text-sm py-2">
            <div className="w-32 text-zinc-400 ">
              <h2>{item.item1}</h2>
            </div>
            <div className="w-38 ">
              <h2>{item.item2}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="text-zinc-400 flex pb-24 justify-between items-center py-2 text-sm">
        <CtaLink
          nameLink="view.cv"
          link="https://www.cakeresume.com/nur-hidayat-e446ba"
        />
        <h2 className="text-[12px]">2024 NN</h2>
      </div>
    </>
  );
};

export default TechSection;
