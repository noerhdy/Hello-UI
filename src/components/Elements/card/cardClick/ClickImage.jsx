import { CornerLeftUp } from "lucide-react";
import React, { useState } from "react";

const ClickImage = ({ defaultSrc, clickedSrc, alt }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div
      className="relative p-4 rounded-md bg-zinc-200"
      onClick={handleImageClick}
    >
      <img
        src={isClicked ? clickedSrc : defaultSrc}
        alt={alt}
        className="object-cover w-fit bg-center rounded-lg transition-transform duration-500 ease-in-out"
      />
      <div className="flex ml-4 mt-2">
        <CornerLeftUp size={16} className="text-zinc-500" />
        <h2 className="text-[10px] mt-1 text-zinc-500">
          Click on the image to change
        </h2>
      </div>
    </div>
  );
};

export default ClickImage;
