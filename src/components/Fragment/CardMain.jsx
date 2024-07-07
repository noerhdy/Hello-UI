import React from "react";
import CardIndex from "../Elements/card/cardNormal/CardIndex";
import CardClick from "../Elements/card/cardClick/CardClick";

const CardMain = () => {
  return (
    <>
      <div className="text-zinc-400 w-2/3 font-mono items-center text-[12px]">
        <h2>
          Some design experiments I learned and some I came up with and designed
          myself.
        </h2>
      </div>
      <CardClick
        defaultImg="./IMG/zen-wire.jpg"
        clickImg="./IMG/zen.jpg"
        titleName="Zen layout"
        titleText="Design"
        titleText2="Development"
      />
      <CardClick
        defaultImg="./IMG/ayuki-wire.jpg"
        clickImg="./IMG/ayuki.jpg"
        titleName="Ayuki (Single Page)"
        titleText="Design"
        titleText2="Development"
      />
      <CardIndex
        imgUrl="./IMG/sec3.webp"
        titleName="Dhome (Landing Page)"
        titleText="Design"
      />
      <CardIndex
        imgUrl="./IMG/af.jpg"
        titleName="AS (Landing Page)"
        titleText="Design"
      />
      <div className="text-zinc-400 pt-12 w-2/3 font-mono items-center text-[12px]">
        <h2>Other</h2>
      </div>
      <CardIndex imgUrl="./IMG/sec5.jpg" titleName="WF " titleText="..." />
      <CardIndex imgUrl="./IMG/sec6.jpg" titleName="Vctr " titleText="..." />
      <CardIndex imgUrl="./IMG/sec7.jpg" titleName="Swift " titleText="..." />
    </>
  );
};

export default CardMain;
