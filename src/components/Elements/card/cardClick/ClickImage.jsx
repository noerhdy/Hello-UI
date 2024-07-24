import React, { useState, useEffect } from "react";

const ClickImage = ({
  defaultSrc,
  clickedSrc1,
  clickedSrc2,
  alt,
  titleText,
  titleText2,
  titleName,
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
    <div className="relative p-2 rounded-md dark:bg-zinc-900 bg-zinc-200 cursor-pointer">
      <img
        onClick={handleImageClick}
        src={currentSrc}
        alt={alt}
        className="object-cover aspect-video bg-center duration-500 ease-in-out rounded-lg "
      />
      <div className="flex mt-2 items-center justify-between ml-2 py-2">
        <div className="text-[1rem] ">
          <h2 className="font-medium text-zinc-800 dark:text-zinc-200">
            {titleName}
          </h2>
        </div>
        <h2 className="text-[0.625rem] text-zinc-500">
          Click on the image to change
        </h2>
        <div className="flex justify-end space-x-2  text-[0.75rem] items-center">
          <p className="px-2 py-1 bg-zinc-300 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500  rounded-md">
            {titleText}
          </p>
          <p className="px-2 py-1 bg-zinc-300 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500 rounded-md">
            {titleText2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClickImage;
