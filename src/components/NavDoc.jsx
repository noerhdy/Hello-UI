import React, { useState } from "react";
import { ModeToggle } from "./Fragment/ToggleMode";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { PanelBottomClose } from "lucide-react";
import ProfileModal from "./Fragment/ProfileModal";

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

  return (
    <TooltipProvider>
      <div className="fixed inset-x-0 bottom-0 flex h-16 mb-2 items-center z-50">
        <div className="mx-auto relative flex h-[64px] items-end gap-4 md:gap-2 rounded-2xl backdrop-blur-sm backdrop-filter  bg-gradient-to-t from-zinc-950/5 dark:bg-gradient-to-t dark:from-neutral-100/5 from-5% px-6 pb-2 dark:bg-zinc-900/5 md:px-4">
          {/* PROFIL */}
          <div className="relative flex justify-center">
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size="icon"
                  variant="default"
                  onClick={openProfileModal} // Membuka modal saat button ditekan
                >
                  <PanelBottomClose className="h-[1.2rem] w-[1.2rem] text-zinc-900 dark:text-blue-500  duration-300 transform scale-100 group-hover:scale-110" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="dark:text-blue-600 text-black font-semibold">
                  Profil
                </p>
              </TooltipContent>
            </Tooltip>
          </div>

          {/* SWITCH TOGGLE */}
          <div className="relative flex justify-center">
            <Tooltip>
              <TooltipTrigger>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p className="dark:text-blue-600 text-black font-semibold">
                  Switch
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
