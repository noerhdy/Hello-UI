import React from "react";
import FormCreate from "../../components/Fragment/FormCreate";
import CtaBack from "@/components/Elements/Button/CtaBack";
import TextEditor from "../textEditor";
import { HeadersPage } from "@/components/Fragment/HeadersPage";

const CreateBlog = () => {
  return (
    <section className=" flex flex-col items-center bg-[#f7f7f7] dark:bg-zinc-950">
      <div className="w-full max-w-screen-md text-balance">
        <CtaBack link="/">home</CtaBack>
        <HeadersPage title="Create" />
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
