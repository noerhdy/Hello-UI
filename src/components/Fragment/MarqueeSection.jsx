import { marqImage } from "@/constants";
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  return (
    <div className="grid grid-cols-4 appearance-none shadow-xl h-full rounded-xl py-4 my-6 dark:bg-zinc-900 bg-zinc-100">
      <div className=" col-span-5 mx-4  overflow-hidden">
        <Marquee pauseOnClick={false} autoFill speed={50}>
          {marqImage.map((item, i) => (
            <div
              key={i}
              className="flex max-w-[220px] overflow-hidden rounded-md space-x-2"
            >
              <img
                className="rounded-lg overflow-hidden max-w-[180px] mx-1 ease-in-out duration-500 bg-center bg-cover dark:border-none border border-zinc-900/10"
                src={item.image}
                alt={item.title} // Menambahkan alt text untuk aksesibilitas
                draggable="false" //
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSection;

{
  /* jika ingin menambahkan efek hover black tambahkan: group grayscale brightness-50 over:filter-none */
}
