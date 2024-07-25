import React from "react";
import CardIndex from "../Elements/card/cardNormal/CardIndex";
import CardClick from "../Elements/card/cardClick/CardClick";

const CardMain = () => {
  return (
    <>
      <div className="text-zinc-400 text-[0.75rem] sm:w-2/4 w-full leading-5">
        <h2>
          Some design experiments I learned and some I came up with and designed
          myself.
        </h2>
      </div>
      <CardClick
        defaultImg="./IMG/zen-thumb.webp"
        clickImg1="./IMG/zen-wire.webp"
        clickImg2="./IMG/zen-dflt.webp"
        titleName="Zen "
        titleText="Design"
        titleText2="Development"
        nameLink="view"
        link="https://zen-layout.vercel.app/"
      />
      <CardClick
        defaultImg="./IMG/ayukai-thumb.webp"
        clickImg1="./IMG/ayukai-wire.webp"
        clickImg2="./IMG/ayukai-dflt.webp"
        titleName="Ayukai "
        titleText="Design"
        titleText2="Development"
        nameLink="view"
        link="https://dub.sh/ayukai-darkly"
      />
      <CardIndex
        imgUrl="./IMG/sec9.webp"
        titleName="Dhome "
        titleText="Design"
      />
      <CardIndex
        imgUrl="./IMG/sec8.webp"
        titleName="Re-Compass"
        titleText="Design"
      />

      <div className="text-zinc-400 pt-12 w-2/3  text-[0.75rem]">
        <h2>Other</h2>
      </div>
    </>
  );
};

export default CardMain;
