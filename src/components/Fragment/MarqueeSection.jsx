import { marqImage } from "@/constants";
import React, { useEffect } from "react";

function MarqueeSection() {
  useEffect(() => {
    // Menyalin elemen dengan kelas "marq"
    const marq = document.querySelector(".marq").cloneNode(true);
    // Menambahkan elemen yang telah disalin ke dalam "container-marq"
    document.querySelector(".container-marq").appendChild(marq);
  }, []); // Efek ini hanya dijalankan sekali setelah komponen dirender

  return (
    <div className="grid grid-cols-4 appearance-none shadow-xl h-full rounded-xl py-4 my-6 dark:bg-zinc-900 bg-zinc-100">
      <div className="container-marq col-span-5 mx-4 flex overflow-hidden">
        <div className="marq flex animate-marquee gap-2 mx-2  ">
          {marqImage.map((item, i) => (
            <div
              key={i}
              className="flex max-w-[220px] overflow-hidden rounded-md "
            >
              <img
                className="rounded-lg overflow-hidden max-w-[180px] mx-1 ease-in-out duration-500 bg-center bg-cover dark:border-none border border-zinc-900/10"
                src={item.image}
                alt={item.title} // Menambahkan alt text untuk aksesibilitas
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarqueeSection;
