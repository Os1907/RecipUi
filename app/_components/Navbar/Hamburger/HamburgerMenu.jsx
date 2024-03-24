'use client'
import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import Image from 'next/image'
import Link from 'next/link'
import icon from '../../../../public/whitelogo.png'

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false)
    const [display, setdisplay] = useState(true)
    
    function hidePage(params) {
      setOpen(false)
    }
  return (
    <>

    <div onClick={()=>setdisplay(false)} className=' w-full flex justify-start lg:hidden z-50   '>

    <Hamburger toggled={isOpen} toggle={setOpen}  size={25}  />
    </div>
    {
        isOpen? 
        <div className='bg-gradient-to-r from-mainRed via-mainRed to-main_orange w-full  h-screen absolute top-0 left-0 z-40 flex justify-center items-center scale-in-hor-right  flex-col'>
            <ul className="menu menu-vertical px-1 text-xl text-center mt-24">
      <li 
      onClick={()=>{
        hidePage()
      }}
       className='mr-3 my-4  focus:text-white  hover:bg-main_orange    hover:border-b border-main_orange  rounded-lg'><Link href='/home'>Home</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }}
       className='mr-3 my-4  focus:text-white  hover:bg-main_orange   hover:border-b border-main_orange  rounded-lg'> <Link href='/search'>Search</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4  focus:text-white  hover:bg-main_orange   hover:border-b border-main_orange  rounded-lg'><Link href='/categories'>Categories</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4  focus:text-white  hover:bg-main_orange   hover:border-b border-main_orange  rounded-lg'><Link href='/area'>Area</Link></li>
      <li 
      onClick={()=>{
        hidePage()
      }} 
      className='mr-3 my-4  focus:text-white  hover:bg-main_orange   hover:border-b border-main_orange  rounded-lg'><Link href='/ingredients'>Ingredients</Link></li>
            </ul>
    <div className=' flex items-end mt-28 '>

    <Image src={icon} alt="recipLogo"  height={100} width={100} />
    </div>

    </div> : <div className={display ? 'hidden':'bg-gradient-to-r from-mainRed via-mainRed to-main_orange  w-full h-screen absolute top-0 left-[-100px] z-40 flex justify-center items-center slide-out-right flex-col'}>
            <ul className="menu menu-vertical px-1 text-xl text-center  mt-24">
      <li className= { isOpen?   'hidden': 'mr-3 my-4 focus:bg-transparent focus-within:text-white  focus:text-white  hover:bg-mainRed hover:border  rounded-lg' } ><Link href='home'>Home</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4  focus:text-white  hover:bg-mainRed hover:border  rounded-lg' }> <Link href='search'>Search</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4  focus:text-white  hover:bg-mainRed hover:border  rounded-lg' }><Link href='categories'>Categories</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4  focus:text-white  hover:bg-mainRed hover:border  rounded-lg' }><Link href='area'>Area</Link></li>
      <li className= { isOpen?   'hidden': 'mr-3 my-4  focus:text-white  hover:bg-mainRed hover:border  rounded-lg' }><Link href='ingredients'>Ingredients</Link></li>
    </ul>
    <div className=' flex items-end mt-28 '>
    <Image src={icon} alt="recipLogo"  height={100} width={100} />

    </div>

    </div> 
    }
    
    
    
    
    </>
  )
}
