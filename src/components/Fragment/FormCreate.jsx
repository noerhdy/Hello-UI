import React, { useState } from "react";
import InputForm from "../Elements/input";
import Button from "../Elements/Button/ButtonIndex";
import { Textarea } from "../ui/textarea";
import Axios from "axios";
import CardForm from "../Elements/card/CardForm";

const FormCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Body:", body);
    console.log("image:", image);

    // Add your form submission logic here
    const data = new FormData();
    // append = add new object
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);

    Axios.post("http://localhost:4000/v1/blog/post", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("post-success :", res);
      })
      .catch((err) => {
        console.log("err :", err);
      });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <form onSubmit={onSubmit}>
      <InputForm
        label="Post Title"
        type="text"
        placeholder="title name"
        name="title"
        autoComplete="current-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <CardForm
        type="file"
        name="file"
        autoComplete="file"
        accept=".jpg, .jpeg, .png, .svg, .webp, .avif"
        onChange={(e) => onImageUpload(e)}
        imgUrl={imagePreview}
      />

      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Type your message here."
      />
      <Button
        classname=" my-6 bg-neutral-200 hover:bg-neutral-300 text-zinc-950 w-full "
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default FormCreate;
