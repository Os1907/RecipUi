import React from 'react'
import image from '../../../public/whitelogo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    


    <footer className="bg-gradient-to-r from-mainRed via-mainRed to-main_orange border-t border-main_orange">
  <div className="relative mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8 ">
    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center  lg:justify-start">
        <Image
      src={image}
      width={150}
      height={150}
      alt="Picture of the author"
      className='mx-2'
    />
        </div>
        <p className="mx-auto  max-w-md text-center leading-relaxed text-white lg:text-left">
        THE MOST DELICIOUS
RECIPES FROM AROUND THE WORLD
        </p>
      </div>
      <ul className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12 text-white">
      <li><Link href="/home" className='  rounded font-medium'>Home</Link></li>
      <li><Link href="/home" className='  rounded  font-medium'>Search</Link></li>
      <li><Link href="/home" className='  rounded  font-medium'>Categories</Link></li>
      <li><Link href="/home" className='  rounded  font-medium'>Area</Link></li>
      <li><Link href="/home" className='  rounded  font-medium'>Ingredients</Link></li>
      </ul>
    </div>
    <p className="mt-2 text-center text-sm text-white lg:text-right">
    Developed by : Osama Mohamed
    </p>
  </div>
</footer>

    
    
    </>
  )
}
