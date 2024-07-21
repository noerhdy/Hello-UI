import React from "react";
import CtaLink from "../Elements/Button/CtaLink";

const TechSection = () => {
  return (
    <>
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
