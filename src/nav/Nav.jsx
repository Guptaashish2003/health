import React from 'react'
import { navItems } from '../utils/data'
import NavButton from './_componets/NavButton'
const Nav = () => {
  return (
    <nav className='p-1 w-full h-12 mt-2 bg-[#ffff] mx-auto flex items-center rounded-3xl ' >
      <span className='h-10 p-2 relative  '>
      <img className='h-full w-full ' src="/assets/TestLogo.svg" alt="" />
      </span>
      <div className='flex gap-x-1 mx-auto '>
        {navItems.map((data, index) => {
          return <NavButton key={index} data={data} />
        })}
      </div>
      <div className='flex gap-x-1'>
        <span className='size-9'> <img className='w-full h-full' src="/assets/doctor.png" alt="doctor" /></span>
        <span className='felx flex-col items-center justify-center'>
          <p className='text-[#000]  text-xs'>Dr. Jose Simmons</p>
          <p className='text-[#000] opacity-60 text-xs'>General Practitioner</p>

        </span>
        <span className='flex items-center justify-center gap-x-2 mr-3'>
        <hr class="w-0.5 h-6 opacity-35 border-none bg-black"/>
        <span className='size-4'> <img className='w-full h-full' src="/assets/setting.png" alt="arrow-down" /></span>
        <span className='w-1 h-3'> <img className='w-full h-full' src="/assets/menu.png" alt="arrow-down" /></span>
        </span>



      </div>

      
    </nav>
  )
}

export default Nav