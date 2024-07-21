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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <PanelBottomClose className="h-[1.2rem] w-[1.2rem] transition-all" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  ">
        <DialogHeader>
          <DialogTitle className="text-center">Profile</DialogTitle>
          <DialogDescription className="text-center">
            Check out my profile for more details
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 ">
          <AccordionProfil />
          <AccordionTech />
        </div>
        <DialogFooter>
          <Button type="submit">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
