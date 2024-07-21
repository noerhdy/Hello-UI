import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataTech } from "@/constants";
import { Layers2 } from "lucide-react";

export function AccordionTech() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="bg-zinc-200 px-4 rounded-md">
        <AccordionTrigger className="">
          <div className="flex items-center space-x-2">
            <Layers2 className="h-[1.2rem] w-[1.2rem] transition-all" />
            <h1>Tech Stack</h1>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col border-t py-4">
            {dataTech.map((item, index) => (
              <div key={index} className="flex items-center ">
                <div className="flex justify-between w-full py-2 px-4">
                  <h2>{item.item1}</h2>
                  <h2>{item.item2}</h2>
                </div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
