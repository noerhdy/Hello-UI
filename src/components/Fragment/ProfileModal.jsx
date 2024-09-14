import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { AccordionProfil } from "./AccordionProfil";
import { AccordionTech } from "./AccordionTech";
import { Accordion } from "../ui/accordion";

const ProfileModal = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 z-40 px-4 bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="fixed bottom-0 inset-0 z-50"
            initial={{ y: 800 }}
            animate={{ y: 0 }}
            exit={{ y: 800 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="flex flex-col  justify-end  min-h-screen items-center sm:items-center sm:justify-center">
              <div className="w-full max-w-screen-sm px-0 sm:px-6 ">
                <div className="flex flex-col w-full items-center sm:rounded-[1rem] pb-12 rounded-none rounded-t-[1rem] shadow-xl text-zinc-950  dark:text-zinc-50 py-2 bg-zinc-100 dark:bg-zinc-900 px-4">
                  <div className="flex justify-between  w-full gap-2 py-4">
                    <div className="flex flex-col items-start  w-full gap-2 ">
                      <h1 className=" text-[1rem] font-medium">Profile</h1>
                      <h1 className=" text-[0.875rem] font-medium">
                        Check out my profile for more details
                      </h1>
                    </div>
                    <div>
                      <X
                        size={16}
                        onClick={onClose}
                        className="cursor-pointer text-zinc-500"
                      />
                    </div>
                  </div>
                  <div className="max-h-[400px] w-full overflow-y-auto gap-2">
                    <Accordion type="single" collapsible>
                      <AccordionProfil />
                      <AccordionTech />
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
