import React from "react";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import CardIndex from "../Elements/card/CardIndex";
import { useSelector, useDispatch } from "react-redux";

const MainLayout = () => {
  // const [dataBlog, setDataBlog] = useState([]);
  const { dataBlogs, name } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("data blog global : ", dataBlogs);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "UPDATE_NAME" });
    }, 3000);

    Axios.get("http://localhost:4000/v1/blog/posts")
      .then((result) => {
        console.log("Data API", result.data);
        const responseApi = result.data;

        // setDataBlog(responseApi.data);
        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseApi.data });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <section className=" flex flex-col min-h-screen items-center  bg-[#f7f7f7] dark:bg-zinc-950 ">
      <div className="w-full max-w-screen-md bg-[#f7f7f7] dark:bg-zinc-950 text-balance">
        <div className="flex flex-col text-center justify-center pb-8 relative items-center  ">
          <img
            className="object-cover w-auto bg-center dark:opacity-5"
            src="imageBlog/line-pattern.png"
          ></img>
          <div className="flex absolute flex-col space-y-4 w-1/2 ">
            <h1 className="font-bold text-5xl text-black dark:text-white">
              Ma Favorite Cookie
            </h1>
            <p>{name}</p>
            <p className="text-xl text-black dark:text-zinc-600 text-pretty">
              Lorem ipsum dolor sit amet consectetur adipisicing eli
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-md  pb-12  text-balance space-y-6">
        <div className="flex flex-wrap justify-center gap-2 py-2">
          {dataBlogs.map((blog) => {
            return (
              <CardIndex
                key={blog._id}
                imgUrl={`http://localhost:4000/${blog.image}`}
                titleName={blog.title}
                titleText={blog.body}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainLayout;
