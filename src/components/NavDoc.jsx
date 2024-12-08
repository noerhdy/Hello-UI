import React, { useState } from "react";
import { ModeToggle } from "./Fragment/ToggleMode";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { PanelBottomClose, Dribbble } from "lucide-react";
import ProfileModal from "./Fragment/ProfileModal";
import CtaLink from "./Elements/Button/CtaLink";

const NavDoc = () => {
  // State untuk mengelola visibilitas ProfileModal
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);

  // Fungsi untuk membuka modal
  const openProfileModal = () => {
    setProfileModalVisible(true);
  };

  // Fungsi untuk menutup modal
  const closeProfileModal = () => {
    setProfileModalVisible(false);
  };
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <TooltipProvider>
      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center h-16 px-6">
        <div className=" relative flex  items-center justify-center gap-2  md:gap-2 rounded-xl backdrop-blur-sm backdrop-filter bg-gradient-to-t from-zinc-950/5 dark:bg-gradient-to-t dark:from-neutral-100/5 from-5% py-2 dark:bg-zinc-900/10  w-full max-w-screen-sm">
          {/* SWITCH TOGGLE */}
          <div className="relative flex justify-center">
            <Tooltip>
              <TooltipTrigger>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold text-black dark:text-blue-600">
                  Switch
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* PROFIL */}
          <div className="relative flex justify-center">
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size="icon"
                  variant="default"
                  onClick={openProfileModal}
                >
                  <PanelBottomClose className="h-[1.2rem] w-[1.2rem] text-zinc-900 dark:text-blue-500  duration-300 transform scale-100 group-hover:scale-110" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold text-black dark:text-blue-600">
                  Profil
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          {/* Dribble */}
          <div className="relative flex justify-center">
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size="icon"
                  variant="default"
                  onClick={() => handleClick("https://dribbble.com/noerhdt")}
                >
                  <Dribbble className="h-[1.2rem] w-[1.2rem] text-zinc-900 dark:text-blue-500  duration-300 transform scale-100 group-hover:scale-110" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold text-black dark:text-blue-600">
                  Dribble
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* PORTFOLIO IDN */}
          <div className="relative flex justify-center">
            <Tooltip>
              <TooltipTrigger>
                <Button
                  className="w-full px-4 text-blue-600 hover:text-blue-500 "
                  size="icon"
                  variant="default"
                  onClick={() =>
                    handleClick(
                      "https://dub.sh/ggl.portfolio"
                    )
                  }
                >
                  Portfolio (ID)
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold text-black dark:text-blue-600">
                  Lihat Portfolio (Bahasa Indonesia)
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Render ProfileModal dengan kontrol visibilitas */}
      <ProfileModal
        isVisible={isProfileModalVisible}
        onClose={closeProfileModal}
      />
    </TooltipProvider>
  );
};

export default NavDoc;
