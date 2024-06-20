import React from "react";
import { useEffect } from "react";
import CardIndex from "../Elements/card/CardIndex";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "@/config/Redux/Action";
import { HeadersPage } from "../Fragment/HeadersPage";

const MainLayout = () => {
  const { dataBlog } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch]);

  return (
    <section className=" flex flex-col min-h-screen items-center  bg-[#f7f7f7] dark:bg-zinc-950 ">
      <HeadersPage title="Ma Favorite Cookie" subtitle="hello" />
      <div className="max-w-screen-md  pb-12  text-balance space-y-6">
        <div className="flex flex-wrap justify-center gap-2 py-2">
          {dataBlog.map((blog) => {
            return (
              <CardIndex
                key={blog._id}
                imgUrl={`http://localhost:4000/${blog.image}`}
                titleName={blog.title}
                titleText={blog.body}
                _id={blog._id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainLayout;
