import React from "react";
import * as Icons from "lucide-react"; // for other icons
import { FaXTwitter } from "react-icons/fa6"; // specifically import the X/Twitter icon
import { dataContact } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ContactList = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <TooltipProvider>
      <div className="flex space-x-4 relative z-50">
        {dataContact.map((contact, index) => {
          // Special case for Twitter/X icon
          const IconComponent =
            contact.icon === "xTwitter"
              ? FaXTwitter
              : Icons[
                  contact.icon.charAt(0).toUpperCase() + contact.icon.slice(1)
                ];

          return (
            <Tooltip key={index}>
              <TooltipTrigger>
                <div className="relative group flex items-center">
                  <button
                    onClick={() => handleClick(contact.url)}
                    className="relative flex items-center bg-transparent border-none p-0"
                  >
                    {IconComponent && (
                      <IconComponent className="w-4 h-4 text-blue-600 ease-in-out transition-transform duration-300 group-hover:scale-125 z-50" />
                    )}
                  </button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="dark:text-blue-600 text-black font-semibold">
                  {contact.name}
                </p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default ContactList;
