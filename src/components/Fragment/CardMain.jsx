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
        defaultImg="./IMG/sec10.webp"
        clickImg1="./IMG/zen-wire.webp"
        clickImg2="./IMG/zen.webp"
        titleName="Zen layout"
        titleText="Design"
        titleText2="Development"
      />
      <CardClick
        defaultImg="./IMG/ayukai-thumb.webp"
        clickImg1="./IMG/ayukai-wire.webp"
        clickImg2="./IMG/ayukai-dflt.webp"
        titleName="Ayuki (Single Page)"
        titleText="Design"
        titleText2="Development"
      />
      <CardIndex
        imgUrl="./IMG/sec9.webp"
        titleName="Dhome (Landing Page)"
        titleText="Design"
      />
      <CardIndex
        imgUrl="./IMG/sec8.webp"
        titleName="AS (Landing Page)"
        titleText="Design"
      />
      <CardIndex
        imgUrl="./IMG/af.webp"
        titleName="AS (Landing Page)"
        titleText="Design"
      />
      <div className="text-zinc-400 pt-12 w-2/3 font-mono items-center text-[12px]">
        <h2>Other</h2>
      </div>
    </>
  );
};

export default CardMain;
