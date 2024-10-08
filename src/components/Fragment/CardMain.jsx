import React from "react";
import CardIndex from "../Elements/card/cardNormal/CardIndex";
import CardClick from "../Elements/card/cardClick/CardClick";
import CardClick2 from "../Elements/card/cardClick2/CardNoClick";
import CardNoClick from "../Elements/card/cardClick2/CardNoClick";
import CardSection from "./CardSection";

const CardMain = () => {
  return (
    <>
      <div className="text-zinc-400 text-[0.875rem] sm:w-2/4 w-full leading-5 space-y-4">
        <h2>
          Some design experiments I learned and some I came up with and designed
          myself.
        </h2>
        {/* <div className="text-[0.875rem] font-medium text-neutral-950 dark:text-zinc-200">
          <h2>Ui</h2>
        </div> */}
      </div>
      <CardNoClick
        imgUrl="./IMG/disarray-dflt.webp"
        titleName="Disarray"
        titleText="Design"
        titleText2="Development"
        nameLink="view"
        link="https://dub.sh/disarray-co"
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
      <div className="text-[0.875rem]  gap-2  flex flex-col font-medium text-neutral-950 dark:text-zinc-200">
        <h2>Other</h2>
        <CardSection
          slidePerView={1.8}
          startId={7}
          endId={10}
          aspect="size-full"
        />
        <CardSection
          slidePerView={2.2}
          startId={1}
          endId={6}
          aspect="aspect-square"
        />
      </div>
    </>
  );
};

export default CardMain;
