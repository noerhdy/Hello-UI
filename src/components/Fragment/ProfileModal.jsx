import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PanelBottomClose } from "lucide-react";
import { AccordionProfil } from "./AccordionProfil";
import { AccordionTech } from "./AccordionTech";

export function ProfileModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="default" onClick={() => setOpen(true)}>
          <PanelBottomClose className="h-[1.2rem] w-[1.2rem] dark:text-zinc-950 text-zinc-200  duration-300 transform scale-100 group-hover:scale-110" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-center text-zinc-950 dark:text-zinc-50 text-[1rem]">
            Profile
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-950 dark:text-zinc-50 text-[0.875rem]">
            Check out my profile for more details
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto space-y-4">
          <AccordionProfil />
          <AccordionTech />
        </div>
        <DialogFooter>
          <Button
            variant="defaultModal"
            type="button"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
