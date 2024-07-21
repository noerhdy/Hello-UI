import React from "react";
import { dataContact } from "@/constants";

const ContactSection = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex space-x-4 items-center  text-[12px] max-w-screen-sm mt-8">
      {dataContact.map((contact, index) => (
        <button
          key={index}
          onClick={() => handleClick(contact.url)}
          className="flex items-center font-semibold text-zinc-400 hover:text-zinc-950 duration-200 ease-in-out"
        >
          <h2 className="mr-6">{contact.name}</h2>
          {index < dataContact.length - 1 && (
            <span className=" rounded-full h-1 w-1 bg-zinc-500"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ContactSection;
