import { mealDetails } from '@/app/_util/fetchdata'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineCategory } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";

export default async function meal({params}) {

  const {meals} = await mealDetails(params.id)
  const Ingredient = []
   const  pushIng = ()=>{
     for (let i = 1; i <= 20 ; i++) {
       if ( meals[0][`strIngredient${i}`] && meals[0][`strMeasure${i}`]) {
         Ingredient.push(( meals[0][`strMeasure${i}`] + meals[0][`strIngredient${i}`]))
        } }}
  pushIng()
  return (
    <>
   <section className='bg-gradient-to-r from-mainRed via-mainRed to-main_orange h-auto py-10 relative  '>
    <div className='h-auto  '>

    <div className="mx-auto  px-2 py-16 sm:px-6 lg:px-8   ">
    <div className="grid grid-cols-1  w-full lg:grid-cols-2 ">
      <div className="relative z-10 lg:py-16 ">
        <div className="relative h-64 sm:h-80 lg:h-full ">

          <Image alt="Meal Image" src={meals[0]?.strMealThumb} width={250} height={250} className="rounded-3xl absolute inset-0 h-full w-full lg:h-[90%] lg:w-[90%] object-cover  " />
          <div className='absolute h-full top-0 lg:top-[-10%] bg-gradient-to-t from-mainRed w-full '></div>
        </div>
      </div>
      <div className="relative flex items-center   bg-gradient-to-r from-mainRed via-mainRed to-main_orange w-full">
        
        <div className="p-8 sm:p-16 lg:p-24 text-center w-full z-10 ">
    <h2 className='text-white lg:text-5xl text-3xl p-2  font-bold uppercase bg-gradient-to-l inline-block   from-main_orange'>
      {meals[0]?.strMeal}
      </h2>
<div className='my-3'>
  <p className='bg-gradient-to-l inline-block py-1 px-2  from-main_orange text-white font-semibold'>
  <IoEarthOutline className='inline mb-1 text-lg' />   Area : <span className='font-normal'> {meals[0]?.strArea} </span>  
  </p>
  <p className='bg-gradient-to-l inline-block py-1 px-2 mx-2  from-main_orange text-white font-semibold'>
  <MdOutlineCategory className='inline mb-1 text-xl' /> Category : <span className='font-normal'> {meals[0]?.strCategory} </span>  
  </p>
  
</div>
<details  className="group py-1 text-lg">
<summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-white marker:[font-size:0px]">
      Instructions
        <svg className="h-6 w-6 rotate-0 transform text-white group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </summary>
          <p className="mt-4 text-white text-start">
          {meals[0]?.strInstructions}
          </p>
    </details>
    <div className='flex flex-wrap justify-center  mt-4 flex-col md:flex-row items-center'>

      <h6 className='text-white text-lg font-bold'>
      Recipes :
      </h6>
      <div className='flex flex-wrap justify-center gap-y-2 gap-x-1 '>

      
    {
      Ingredient?.map((item)=>{
        return (
          <>
          <p key={ 5 * Math.random()} className='bg-white inline-block px-1 tex-sm md:text-base lg:py-1 lg:px-3 lg:mx-2  rounded-md text-main_orange font-semibold'>
          {item} 
  </p>
          </>
        )
      })
    }
     </div>
     </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 " >
        {
           meals[0].strYoutube == null ? '' : <Link target="_blank" className="block w-full z-20 rounded border border-main_orange bg-main_orange px-12 py-3 text-sm font-medium text-white  hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:px-14 duration-300" href={meals[0]?.strYoutube } > Youtube </Link>  
        }
        {
           meals[0].strSource == null ? '' : <Link target="_blank" className="block w-full z-20 rounded border border-main_orange bg-main_orange px-12 py-3 text-sm font-medium text-white  hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:px-14 duration-300" href={meals[0]?.strSource } > Source </Link>  
        }
       
        
      </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
</section>

    
    
    
    </>
  )
}
