import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate dari react-router-dom versi 6
import Axios from "axios";
import CtaBack from "@/components/Elements/Button/CtaBack";

const DetailBlog = () => {
  const [data, setData] = useState({});
  const { id } = useParams(); // Ambil parameter id dari URL
  const navigate = useNavigate(); // Hook untuk navigasi

  useEffect(() => {
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        console.log("Detail-blog:", res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err :", err);
      });
  }, [id]);

  return (
    <section className="flex flex-col min-h-screen items-center bg-[#f7f7f7] dark:bg-zinc-950">
      <div className="w-full max-w-screen-md p-12 rounded-md space-y-6">
        <CtaBack link="/">Back</CtaBack>
        <img
          className="object-cover sm:w-full sm:h-full w-auto aspect-video drop-shadow-md bg-center duration-500 ease-in-out rounded-lg"
          src={`http://localhost:4000/${data.image}`} // Memperbaiki URL gambar
          alt={data.title} // Menambahkan alt untuk aksesibilitas
        />
        <h1 className="text-black dark:text-white">{data.title}</h1>
        <p className="text-black dark:text-zinc-600">Author - {data.date}</p>
        <p className="text-black dark:text-white text-balance">{data.body}</p>
      </div>
    </section>
  );
};

export default DetailBlog;
