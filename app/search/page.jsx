'use client'
import React, { useState } from 'react'
import { searchMeal } from '../_util/fetchdata'
import Link from 'next/link'
import Image from 'next/image'

export default  function Search() {
    const [meals, setMeals] = useState([])
    const userInput =  searchMeal()
   async function getMeal(id){
        const userInput = await searchMeal(id)
        setMeals(userInput)
    }
  return (
    <>
      <section className=" z-10 text-white bg-gradient-to-r from-mainRed via-mainRed to-main_orange h-auto min-h-screen ">
    <div className='pt-20 lg:mx-72 mx-4'>
    <label htmlFor="search" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-main_orange">
  <input onKeyUp={(e)=>{
    getMeal(e.target.value)
    }} type="text" id="search" placeholder="Search by name " className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0  text-white text-xl lg:text-3xl placeholder:text-white placeholder:text-lg pt-4 pb-6" />
    </label>

      </div>
    <div className="grid grid-cols-12 mt-10 lg:gap-8 gap-3 lg:mx-20 mx-4 pb-10 ">

    {
        meals?.meals?.map((item)=>{
            return <>
           <div key={item.idMeal} className=" relative flex flex-col items-center  rounded-2xl   bg-gradient-to-b from-transparent to-main_orange md:col-span-4 lg:col-span-3 col-span-6 lg:hover:scale-110  duration-300 ">
  <figure><Image src={item.strMealThumb} alt="food-image" width={100} height={100} className='rounded-full'/></figure>
  <Link href={`/item/${item.idMeal}`}>
  <div className="pt-5 w-full text-center">
    <h2 className=" font-bold lg:text-xl text-base ">{item.strMeal}</h2>
    <p className=' text-sm rounded-md py-1 px-2 hand  text-orange-400 inline-block'>{item.strArea}</p>
  </div>
  <div className='mt-2 mb-4'>
    <button className='rounded-md hover:font-semibold py-1 hover:px-3 text-sm lg:text-base lg:hover:px-10 duration-300 hover:bg-gradient-to-tr hover:bg-mainRed   p-2'>
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
