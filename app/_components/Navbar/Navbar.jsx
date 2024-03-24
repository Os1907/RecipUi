import Image from 'next/image'
import React from 'react'
import image from '../../../public/whitelogo.png'
import Link from 'next/link'
import HamburgerMenu from './Hamburger/HamburgerMenu'

export default function Navbar() {
  return (
    <>

<div className="navbar bg-gradient-to-r from-mainRed via-mainRed to-main_orange border-b border-main_orange text-white fixed  top-0 z-30">
  <div className="navbar-start lg:w-[50%] flex justify-between w-[60%] lg:justify-start ">
    
    <HamburgerMenu/>
    <div className='  items-start'>
       <Image
      src={image}
      width={100}
      height={100}
      alt="Picture of the author"
      className='mx-2'
    />
    </div>
   
  </div>
  <div className="navbar-center justify-center   w-[50%] hidden  lg:flex">
    <ul className=" flex justify-between w-[80%] px-1">
      <li><Link href="/home" className='hover:bg-main_orange hover:px-5 py-1 rounded duration-200 font-medium'>Home</Link></li>
      <li><Link href="/search" className='hover:bg-main_orange hover:px-5 py-1 rounded duration-200 font-medium'>Search</Link></li>
      <li><Link href="/categories" className='hover:bg-main_orange hover:px-5 py-1 rounded duration-200 font-medium'>Categories</Link></li>
      <li><Link href="/area" className='hover:bg-main_orange hover:px-5 py-1 rounded duration-200 font-medium'>Area</Link></li>
      <li><Link href="/ingredients" className='hover:bg-main_orange hover:px-5 py-1 rounded duration-200 font-medium'>Ingredients</Link></li>
    </ul>
  </div>
</div>
    
    
    </>
  )
}
