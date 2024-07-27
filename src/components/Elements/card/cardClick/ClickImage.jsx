import React, { useState, useEffect } from "react";
import CtaCard from "../../Button/CtaCard";

const ClickImage = ({
  defaultSrc,
  clickedSrc1,
  clickedSrc2,
  alt,
  titleText,
  titleText2,
  titleName,
  nameLink,
  link,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(defaultSrc);
  const [loopCount, setLoopCount] = useState(0);

  const handleImageClick = () => {
    setIsClicked((prev) => !prev);
    if (!isClicked) {
      setLoopCount(1); // Mulai loop saat gambar pertama kali diklik
      setCurrentSrc(clickedSrc1);
    } else {
      setLoopCount(0); // Reset loop saat gambar diklik kembali
      setCurrentSrc(defaultSrc);
    }
  };

  useEffect(() => {
    if (isClicked && loopCount > 0 && loopCount <= 3) {
      const timeoutId = setTimeout(() => {
        setCurrentSrc((prevSrc) =>
          prevSrc === clickedSrc1 ? clickedSrc2 : clickedSrc1
        );
        setLoopCount(loopCount + 1);
      }, 1000); // Ganti gambar setiap 1 detik

      return () => clearTimeout(timeoutId);
    }
  }, [isClicked, loopCount, clickedSrc1, clickedSrc2]);

  return (
    <div className="relative rounded-xl dark:bg-zinc-900 sm:p-4 p-0 bg-zinc-100 appearance-none drop-shadow-2xl">
      <div className="relative group">
        <img
          onClick={handleImageClick}
          src={currentSrc}
          alt={alt}
          className="object-cover aspect-video bg-center duration-500 ease-in-out rounded-t-xl sm:rounded-lg cursor-pointer"
        />
        <h2
          className={`absolute bottom-1 ml-2 px-2 py-1 rounded-md bg-zinc-800/80 sm:text-[0.75rem] w-fit text-[0.625rem] text-zinc-300 duration-300 ease-in-out ${
            isClicked || loopCount > 0 ? "opacity-0" : "opacity-100"
          } group-hover:opacity-0`}
        >
          Click on the image to change
        </h2>
      </div>
      <div className="flex justify-between items-center sm:mx-0 mx-4 sm:py-2 py-4">
        <div className="flex-col">
          <h2 className="font-medium text-zinc-800 dark:text-zinc-200 text-[1rem]">
            {titleName}
          </h2>
          <div className="flex space-x-4 sm:text-[0.75rem] text-[0.625rem] items-center">
            <p className="text-zinc-400 dark:text-zinc-600 rounded-md">
              {titleText}
            </p>
            <p className="text-zinc-400 dark:text-zinc-600 rounded-md">
              {titleText2}
            </p>
          </div>
        </div>
        <div>
          <CtaCard nameLink={nameLink} link={link} />
        </div>
      </div>
    </div>
  );
};

export default ClickImage;
