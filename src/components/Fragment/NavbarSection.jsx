import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function NavbarSection() {
  return (
    <section className="flex flex-col items-center bg-[#f7f7f7] dark:bg-zinc-950">
      <div className="w-full z-50 max-w-screen-sm m-2 flex justify-end">
        <Link to="create-blog">
          <div
            className="flex p-2 mr-4 w-fit rounded-md duration-200
        bg-neutral-200 hover:bg-neutral-300
        "
          >
            <User size={16} />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NavbarSection;
