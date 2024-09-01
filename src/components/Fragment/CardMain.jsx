import React from "react";
import CardIndex from "../Elements/card/cardNormal/CardIndex";
import CardClick from "../Elements/card/cardClick/CardClick";
import CardClick2 from "../Elements/card/cardClick2/CardNoClick";
import CardNoClick from "../Elements/card/cardClick2/CardNoClick";

const CardMain = () => {
  return (
    <>
      <div className="text-zinc-400 text-[0.875rem] sm:w-2/4 w-full leading-5 space-y-4">
        <h2>
          Some design experiments I learned and some I came up with and designed
          myself.
        </h2>
        <div className="text-[0.875rem] font-medium text-neutral-950 dark:text-zinc-200">
          <h2>Ui</h2>
        </div>
      </div>
      <CardNoClick
        imgUrl="./IMG/zen-dflt.webp"
        titleName="Zen"
        titleText="Design"
        titleText2="Development"
        nameLink="view"
        link="https://dub.sh/zen-layout"
      />
      <CardNoClick
        imgUrl="./IMG/moondrop-dflt.webp"
        titleName="Moondrop"
        titleText="Design"
        titleText2="Development"
        nameLink="view"
        link="https://dub.sh/moondrop-st"
      />
      <CardClick
        defaultImg="./IMG/oatside-thumb.webp"
        clickImg1="./IMG/oatside-wire.webp"
        clickImg2="./IMG/oatside-dflt.webp"
        titleName="Re-Oatside"
        titleText="Design"
        titleText2="Development"
        nameLink="view"
        link="https://dub.sh/re-oatside"
      />
      <CardClick
        defaultImg="./IMG/ayukai-thumb.webp"
        clickImg1="./IMG/ayukai-wire.webp"
        clickImg2="./IMG/ayukai-dflt.webp"
        titleName="Ayukai"
        titleText="Design"
        titleText2="Development"
        nameLink="view"
        link="https://dub.sh/ayukai-darkly"
      />
      <div className="flex gap-4">
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
      </div>

      <div className="text-[0.875rem] font-medium text-neutral-950 dark:text-zinc-200">
        <h2>Other</h2>
      </div>
    </>
  );
};

export default CardMain;
