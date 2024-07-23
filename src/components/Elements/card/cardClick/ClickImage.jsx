import React, { useState, useEffect } from "react";

const ClickImage = ({ defaultSrc, clickedSrc1, clickedSrc2, alt }) => {
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
    <div
      className="relative p-4 rounded-md bg-zinc-200 cursor-pointer"
      onClick={handleImageClick}
    >
      <img
        src={currentSrc}
        alt={alt}
        className="object-cover aspect-video  drop-shadow-md bg-center duration-500 ease-in-out rounded-lg "
      />
      <div className="flex ml-4 mt-2">
        <h2 className="text-[10px] mt-1 text-zinc-500">
          Click on the image to change
        </h2>
      </div>
    </div>
  );
};

export default ClickImage;
