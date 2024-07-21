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
    if (index === hoveredIndex) {
      return "visible text-white p-1 text-sm -top-10 -ml-5 absolute px-2 rounded-md bg-[#37B59F]";
    }
    return "text-xs absolute -ml-5 -top-8 opacity-0";
  };

  return (
    <div className="fixed inset-x-0 bottom-0 flex h-16 mb-2 items-center">
      <div className="mx-auto relative flex h-[64px] items-end gap-4 md:gap-2 rounded-2xl backdrop-blur-sm backdrop-filter border border-neutral-800/5 bg-gradient-to-t from-zinc-950/5 dark:bg-gradient-to-t dark:from-neutral-100/5 from-5% px-6 pb-2 dark:bg-zinc-900/5 md:px-4">
        <div
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className="relative space-x-2"
        >
          <ProfileModal />
          <ModeToggle />
          {/* <span className={getSpanClassName(0)}>Mode Toggle</span> */}
        </div>
      </div>
    </div>
  );
};

export default NavDoc;
