import { useState } from "react";
import { ModeToggle } from "./Fragment/ToggleMode";
import { ProfileModal } from "./Fragment/ProfileModal";

const NavDoc = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getSpanClassName = (index) => {
    return index === hoveredIndex
      ? "visible text-white p-1 text-sm absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 rounded-md bg-zinc-900 transition-opacity duration-300 opacity-100"
      : "text-xs absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300";
  };

  return (
    <div className="fixed inset-x-0 bottom-0 flex h-16 mb-2 items-center">
      <div className="mx-auto relative flex h-[64px] items-end gap-4 md:gap-2 rounded-2xl backdrop-blur-sm backdrop-filter border border-neutral-800/5 bg-gradient-to-t from-zinc-950/5 dark:bg-gradient-to-t dark:from-neutral-100/5 from-5% px-6 pb-2 dark:bg-zinc-900/5 md:px-4">
        <div
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className="relative flex justify-center"
        >
          <ProfileModal />
          <span className={getSpanClassName(0)}>Profile</span>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          className="relative flex justify-center"
        >
          <ModeToggle />
          <span className={getSpanClassName(1)}>Switch</span>
        </div>
      </div>
    </div>
  );
};

export default NavDoc;
