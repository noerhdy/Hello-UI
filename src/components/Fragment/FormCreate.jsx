import React from "react";
import InputForm from "../Elements/input";
import Button from "../Elements/Button/ButtonIndex";
import { Textarea } from "../ui/textarea";
import CardImage from "../Elements/card/CardImage";

const FormCreate = () => {
  return (
    <form action="">
      <InputForm
        label="Post Title"
        type="text"
        placeholder="title name"
        name="text"
        autoComplete="current-text"
      />
      <InputForm
        type="file"
        name="file"
        autoComplete="file"
        accept=".jpg, .jpeg, .png, .svg, .webp, .avif"
      />
      <CardImage imgUrl="imageBlog/sec2.webp" />
      <Textarea placeholder="Type your message here." />
      <Button classname="bg-zinc-800 dark:bg-[#ADFA1D] dark:hover:bg-[#72a514] dark:text-black  w-full my-4 hover:bg-black">
        Submit
      </Button>
    </form>
  );
};

export default FormCreate;
