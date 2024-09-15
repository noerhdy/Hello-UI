import { cardImage } from "@/constants";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function CardSection({ startId, endId, aspect, slidePerView }) {
  return (
    <div className="w-full h-full rounded-2xl px-1 dark:bg-zinc-900 bg-zinc-100 py-2">
      <Swiper
        modules={[A11y]}
        slidesPerView={slidePerView} // Menambah .2 agar slide sebelah kanan sedikit terlihat
        spaceBetween={4} // Memberikan sedikit jarak antar gambar
        loop={true}
        className="box-border cursor-pointer relative overflow-hidden size-full"
      >
        {cardImage
          .filter((item) => item.id >= startId && item.id <= endId)
          .map((item, i) => (
            <SwiperSlide key={i} className="flex-shrink-0">
              <div className="mx-1">
                {/* Card container */}
                <img
                  className={`rounded-[1rem] ${aspect} ease-in-out duration-500 bg-center bg-cover dark:border-none border border-zinc-900/10 w-full`}
                  src={item.image}
                  alt={item.title} // Alt text for accessibility
                  draggable="false"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CardSection;
