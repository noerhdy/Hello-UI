import React from 'react'

const CardMain = () => {
  return (
    <div className="group md:w-[45%]  min-w-100 space-y-4 text-start flex-col bg-zinc-100 hover:bg-zinc-200 p-4 mx-2 my-2  h-fit  rounded-md overflow-hidden drop-shadow">
    <img className="object-cover sm:w-full sm:h-full w-auto aspect-video drop-shadow-md bg-center duration-500 ease-in-out rounded-lg "
    src="imageBlog/sec2.webp"></img>
    <div className="flex flex-row justify-between text-balance">
      <div className="flex flex-col space-y-2">
        <h2 className='font-semibold  text-2xl'>Title Blog </h2>
        <p className='text-justify text-sm'>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me.</p>
        </div>
        </div>
      </div>
  )
}

export default CardMain