import React from 'react'

const DetailBlog = () => {
  return (
    <section className=" flex justify-center min-h-screen items-center bg-[#f7f7f7] ">
         <div className="w-full max-w-screen-md bg-[#f7f7f7] p-12 rounded-md text-balance space-y-6">
         <img
                  className="object-cover sm:w-full sm:h-full w-auto aspect-video drop-shadow-md bg-center duration-500 ease-in-out rounded-lg "
                  src="imageBlog/sec2.webp"
                ></img>
         <h1>Title Blog</h1>
         <p>Author - date post</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus unde voluptatum voluptates maiores architecto atque magnam veniam a. Quas quaerat nobis est accusantium asperiores quasi iure sit, suscipit cupiditate!</p>

         </div>
    
      </section>
  )
}

export default DetailBlog