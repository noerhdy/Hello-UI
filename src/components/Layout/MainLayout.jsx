import React from 'react'
import CardMain from '../Fragment/CardMain'

const MainLayout = () => {
  return (
  <section className=" flex flex-col justify-center min-h-screen items-center bg-[#f7f7f7] ">
  <div className="w-full max-w-screen-md bg-[#f7f7f7] text-balance">
    <div className="flex flex-col text-center justify-center py-24 relative ">
      <img className="object-cover w-auto bg-center"
      src="imageBlog/line-pattern.png"></img>
      <div className="flex absolute flex-col space-y-4 w-full">
        <h1 className='font-bold text-5xl'>Blog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
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