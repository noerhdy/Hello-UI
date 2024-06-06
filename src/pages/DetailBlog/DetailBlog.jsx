import CtaBack from "@/components/Elements/Button/CtaBack";
import React from "react";

const DetailBlog = () => {
  return (
    <section className=" flex flex-col min-h-screen items-center bg-[#f7f7f7] dark:bg-zinc-950 ">
      <div className="w-full max-w-screen-md p-12 rounded-md space-y-6">
        <CtaBack link="/">Back</CtaBack>
        <img
          className="object-cover sm:w-full sm:h-full w-auto aspect-video drop-shadow-md bg-center duration-500 ease-in-out rounded-lg "
          src="imageBlog/sec2.webp"
        ></img>
        <h1 className="text-black dark:text-white">Title Blog</h1>
        <p className="text-black dark:text-zinc-600">Author - date post</p>
        <p className="text-black dark:text-white text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus
          unde voluptatum voluptates maiores architecto atque magnam veniam a.
          Quas quaerat nobis est accusantium asperiores quasi iure sit, suscipit
          cupiditate!
        </p>
      </div>
    </section>
  );
};

export default DetailBlog;
