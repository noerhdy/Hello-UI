import React from 'react'
import CardMain from '../Fragment/CardMain'

const MainLayout = () => {
  return (
  <section className=" flex flex-col min-h-screen items-center  bg-[#f7f7f7] dark:bg-zinc-950 ">
  <div className="w-full max-w-screen-md bg-[#f7f7f7] dark:bg-zinc-950 text-balance">
    <div className="flex flex-col text-center justify-center pb-8 relative items-center  ">
      <img className="object-cover w-auto bg-center dark:opacity-5"
      src="imageBlog/line-pattern.png"></img>
      <div className="flex absolute flex-col space-y-4 w-1/2 ">
        <h1 className="font-bold text-5xl text-black dark:text-white">Blog</h1>
        <p className="text-xl text-black dark:text-zinc-600 text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
      </div>
    </div>
  </div>
  <div className="max-w-screen-md  pb-12  text-balance space-y-6">
  <div className="flex flex-wrap justify-center gap-2 py-2">
     <CardMain/>
     </div>
     </div>
</section>
  )
}

export default MainLayout