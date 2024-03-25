import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pattern from '../../../public/download.svg'
export default function HomeCont() {
  return (
    <>
    <section className=" text-white relative bg-gradient-to-r from-mainRed via-mainRed to-main_orange">
        
  <div className="mx-auto max-w-screen-xl z-20 px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto  text-center  ">
      <h1 className="lg:bg-gradient-to-r relative z-10 uppercase text-white font-extrabold text-3xl lg:text-6xl">
      introduce to you the most delicious
        <span className="sm:block"> recipes from around the world </span>
      </h1>
      <p className="mx-auto font2 relative z-10 mt-4 max-w-xl sm:text-xl/relaxed font-medium lg:text-2xl lg:font-bold  ">
       Explore Now
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4 " >
        <Link className="block w-full z-20 rounded border border-main_orange bg-main_orange px-12 py-3 text-sm font-medium text-white  hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:px-14 duration-300" href="area">
          Discover all areas
        </Link>
        
      </div>
    </div>
  </div>
  <div className=' h-[85%] top-10 w-full  bg-repeat my-bg z-0'>
        </div>
</section>
    
    
    
    
    </>
  )
}
