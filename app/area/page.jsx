import React from 'react'
import { areaApi } from '../_util/fetchdata'
import { BiSolidHomeHeart } from "react-icons/bi";
import Link from 'next/link'

export default async function page() {
  const data = await areaApi()
  return (
    <>
    
    <section className=" z-10 text-white bg-gradient-to-r from-mainRed via-mainRed to-main_orange min-h-screen pt-24">
    
        <div className='text-center'>

    <h2 className='text-white lg:text-5xl text-3xl p-2 text-center mb-10 font-bold uppercase bg-gradient-to-l inline-block   from-main_orange'>Countries</h2>
        </div>
   
<div className="grid grid-cols-12 lg:gap-8 gap-3 gap-y-4 lg:mx-20 mx-4 pb-10">

      {
        data?.meals?.map((item)=>{
            return <>
           <div key={item.idMeal} className=" relative flex flex-col items-center  rounded-2xl   bg-gradient-to-b from-transparent to-main_orange md:col-span-4 lg:col-span-3 col-span-6 lg:hover:scale-110  duration-300 ">
  <figure>
  <BiSolidHomeHeart  className='size-36'/>
  </figure>
  <div className="pt-5 w-full text-center">
    <h2 className="lg:text-xl text-base font-bold ">{item.strArea}</h2>
  </div>
  <div className='   mt-2 mb-4'>
  <Link href={`/area/${item.strArea}`}>
    <button className='rounded-md hover:font-semibold py-1 hover:px-3 text-sm lg:text-base lg:hover:px-10 duration-300 hover:bg-gradient-to-tl hover:bg-mainRed  p-2'>
    View Items
    </button>
  </Link>
  </div>
</div>
             </>
        })
    }  
</div>
     </section> 
    
    
    
    </>
  )
}
