import React from "react";
import * as Icons from "lucide-react";
import { dataContact } from "@/constants";

const ContactList = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex space-x-4 relative z-50">
      {dataContact.map((contact, index) => {
        const IconComponent =
          Icons[contact.icon.charAt(0).toUpperCase() + contact.icon.slice(1)];

        return (
          <div key={index} className="relative group flex items-center">
            <button
              onClick={() => handleClick(contact.url)}
              className="relative flex items-center bg-transparent border-none p-0"
            >
              {IconComponent && (
                <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 z-50" />
              )}
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-white text-[12px] opacity-0 group-hover:opacity-100 bg-blue-500 p-1 px-2 rounded-md transition-opacity duration-300 z-50">
              {contact.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
