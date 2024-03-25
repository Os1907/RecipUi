import {getData} from '@/app/_util/fetchdata'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

export default async function HomeProduct() {
        const data = await getData()
  return (
    <>
     <section className=" z-10 text-white bg-gradient-to-r from-mainRed via-mainRed to-main_orange relative">
    
        <div className='text-center relative z-10'>

    <h2 className='text-white font2 lg:text-5xl text-3xl p-2 text-center mb-10 font-bold uppercase bg-gradient-to-l inline-block   from-main_orange'>Collection</h2>
        </div>
   
<div className="grid grid-cols-12 lg:gap-8 gap-3 lg:mx-20 mx-4 pb-10 relative z-10">

    {
        data?.meals?.splice(0,20).map((item)=>{
            return <>
           <div key={item.idMeal} className=" relative flex flex-col items-center  rounded-2xl   bg-gradient-to-b from-transparent to-main_orange md:col-span-4 lg:col-span-3 col-span-6 lg:hover:scale-110  duration-300 ">
  <figure><Image src={item.strMealThumb} alt="food-image" width={100} height={100} className='rounded-full'/></figure>
  <Link href={`/item/${item.idMeal}`}>
  <div className="pt-5 w-full text-center">
    <h2 className="lg:text-xl  text-sm md:text-base font-bold ">{item.strMeal}</h2>
    <p className=' text-sm rounded-md py-1 px-2 hand text-orange-400 inline-block'>{item.strArea}</p>
  </div>
  <div className='   mt-2 mb-4'>
    <button className='rounded-md hover:font-semibold py-1 hover:px-3 text-sm lg:text-base lg:hover:px-10 duration-300 hover:bg-gradient-to-tl hover:bg-mainRed  p-2'>
    View Recipe
    </button>
  </div>
  </Link>
</div>
             </>
        })
    }
</div>

     </section> 
    
    </>
  )
}
