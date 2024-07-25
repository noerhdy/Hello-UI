import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataProfile } from "@/constants";
import { User } from "lucide-react";
import ContactList from "./ContactProfile";
import CtaLink from "../Elements/Button/CtaLink";

export function AccordionProfil() {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative w-full text-zinc-950 dark:text-zinc-50"
    >
      <AccordionItem
        value="item-1"
        className="bg-zinc-200 dark:bg-zinc-900 px-4 rounded-md"
      >
        <AccordionTrigger>
          <div className="flex items-center space-x-2 ">
            <User className="h-[1.2rem] w-[1.2rem] transition-all" />
            <h1 className=" text-[0.875rem]">Profil Information</h1>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col border-t border-zinc-400 py-4 relative text-zinc-950 dark:text-zinc-50 ">
            {dataProfile.map((item, index) => (
              <div
                key={index}
                className="flex flex-row space-x-2 text-sm items-center"
              >
                <div className="flex justify-between py-2 px-4 items-center w-full">
                  <h2>{item.item1}</h2>
                  <h2>{item.item2}</h2>
                </div>
              </div>
            ))}

            <div className="flex justify-between w-full py-2 px-4 items-center">
              <h2>Contact</h2>
              <div className="z-50 absolute  right-4">
                <ContactList />
              </div>
            </div>
            <div className="flex justify-between w-full  py-2 px-4 ">
              <h2>CV</h2>
              <div className="text-end items-center ">
                <div className="text-zinc-400 flex items-center text-sm">
                  <CtaLink
                    nameLink="view.cv"
                    link="https://www.cakeresume.com/nur-hidayat-e446ba"
                  />
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
