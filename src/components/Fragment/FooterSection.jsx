import React from "react";
import { Outlet } from "react-router-dom";

const FooterSection = () => {


  return (
    
    <footer>
        <Outlet/>
        <section className=" flex justify-center py-4 items-center bg-[#f7f7f7] pb-24 ">
         <div className="w-full max-w-screen-md  border-2 bg-zinc-100 border-zinc-200 rounded-md mx-2 ">
          <div className="flex justify-between p-4 border-b border-dashed border-zinc-200">
          <h1>Title Blog</h1>
          <h1>Title Blog</h1>
          </div>
          <div className="flex justify-between p-4 ">
         <p>Author - date post</p>
          
          <h1>Title Blog</h1>
          <h1>Title Blog</h1>
          </div>
        

         </div>
    
      </section>
    </footer>
  
  );
};

export default FooterSection;
