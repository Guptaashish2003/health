import React from 'react'
import { navItems } from '../utils/data'
import NavButton from './_componets/NavButton'
const Nav = () => {
  return (
    <nav className='p-1 w-[96%] h-12 mt-2 bg-[#ffff] mx-auto flex items-center rounded-3xl ' >
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

      </div>

      
    </nav>
  )
}

export default Nav