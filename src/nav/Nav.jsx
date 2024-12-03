import React from 'react'
import { navItems } from '../utils/data'
import NavButton from './_componets/NavButton'
const Nav = () => {
  return (
    <nav className='p-1 w-full h-12 mt-2 bg-[#ffff] mx-auto flex max-sm:justify-between items-center rounded-3xl ' >
      <span className='h-10 p-2 relative  max-sm:h-8 '>
      <img className='h-full w-full ' src="/assets/TestLogo.svg" alt="" />
      </span>
      <div className='flex gap-x-1 mx-auto max-sm:hidden '>
        {navItems.map((data, index) => {
          return <NavButton key={index} data={data} />
        })}
      </div>
      <div className='flex gap-x-1 max-sm:items-center '>
        <span className='size-9 max-sm:size-6'> <img className='w-full h-full' src="/assets/doctor.png" alt="doctor" /></span>
        <span className='felx flex-col text-xs max-sm:text-[9px] items-center justify-center'>
          <p className='text-[#000] '>Dr. Jose Simmons</p>
          <p className='text-[#000] opacity-60 \'>General Practitioner</p>

        </span>
        <span className='flex items-center justify-center gap-x-2 mr-3'>
        <hr className="w-0.5 h-6 max-sm:w-[0.5px] max-sm:h-5 opacity-35 border-none bg-black"/>
        <span className='size-4 max-sm:size-3'> <img className='w-full h-full' src="/assets/setting.png" alt="arrow-down" /></span>
        <span className='w-1 h-3 max-sm:w-0.5 max-sm:h-2'> <img className='w-full h-full' src="/assets/menu.png" alt="arrow-down" /></span>
        </span>



      </div>

      
    </nav>
  )
}

export default Nav