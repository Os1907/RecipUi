import React from 'react'
import { categoriesApi } from '../_util/fetchdata'
import Link from 'next/link'
import Image from 'next/image'

export default async function categories() {
    const data = await categoriesApi()

  return (
    <>
    
    <section className=" z-10 text-white bg-gradient-to-r from-mainRed via-mainRed to-main_orange min-h-screen pt-24">
    
        <div className='text-center'>

    <h2 className='text-white lg:text-5xl text-3xl p-2 text-center mb-10 font-bold uppercase bg-gradient-to-l inline-block   from-main_orange'>Categories</h2>
        </div>
   
<div className="grid grid-cols-12 lg:gap-8 gap-3 gap-y-4 lg:mx-20 mx-4 pb-10">

     {
        data?.categories?.map((item)=>{
            return <>
           <div key={item.idMeal} className=" relative flex flex-col items-center  rounded-2xl   bg-gradient-to-b from-transparent to-main_orange md:col-span-4 lg:col-span-3 col-span-6 lg:hover:scale-110  duration-300 ">
  <figure><Image src={item.strCategoryThumb} alt="food-image" width={150} height={150} className='rounded-full'/></figure>
  <Link href={`/categories/${item.strCategory}`}>
  <div className="pt-5 w-full text-center">
    <h2 className="lg:text-xl text-sm md:text-base font-bold font2 ">{item.strCategory}</h2>
    <p className=' text-sm rounded-md py-1 px-2 hand hidden lg:inline-block  text-orange-400 '>{item.strCategoryDescription.split(" ").slice(0,18).join(" ")}</p>
    <p className=' text-sm rounded-md py-1 px-2 hand lg:hidden  text-orange-400 inline-block'>{item.strCategoryDescription.split(" ").slice(0,10).join(" ")}</p>
  </div>
  <div className='   mt-2 mb-4 w-full flex justify-center'>
    <button className='rounded-md hover:font-semibold py-1 hover:px-3 text-sm lg:text-base lg:hover:px-10 duration-300 hover:bg-gradient-to-tl hover:bg-mainRed  p-2'>
    View Items
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
