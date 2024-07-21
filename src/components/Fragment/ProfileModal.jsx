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
        <Button size="icon" variant="outline" onClick={() => setOpen(true)}>
          <PanelBottomClose className="h-[1.2rem] w-[1.2rem] transition-all" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-center">Profile</DialogTitle>
          <DialogDescription className="text-center">
            Check out my profile for more details
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <AccordionProfil />
          <AccordionTech />
        </div>
        <DialogFooter>
          <Button type="button" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
