import React from "react";
import FormCreate from "../../components/Fragment/FormCreate";
import CtaBack from "@/components/Elements/Button/CtaBack";

const CreateBlog = () => {
  return (
    <section className=" flex flex-col items-center bg-[#f7f7f7] dark:bg-zinc-950">
      <div className="w-full max-w-screen-md text-balance">
        <div className="flex flex-col text-center justify-center relative">
          <CtaBack link="/">Home</CtaBack>
          <img
            className="object-cover w-auto h-1/2 bg-center dark:opacity-5  "
            src="imageBlog/line-pattern.png"
          ></img>
          <div className="flex absolute flex-col space-y-4 w-full">
            <h1 className="font-bold text-5xl text-black dark:text-white">
              Create
            </h1>
            <p className="text-xl text-black dark:text-zinc-600 text-pretty">
              Create new blog post
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center pb-12">
          <div className="w-full max-w-xl bg-[#f7f7f7] dark:bg-zinc-950 drop-shadow-md p-8 rounded-md text-balance">
            <FormCreate />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBlog;
