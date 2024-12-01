import React from 'react'

const NavButton = ({data={data}}) => {
  return (
    <button  className='flex focus:bg-[#01F0D0] py-1 px-2 rounded-3xl gap-x-1 items-center justify-center' >
      <span className='size-3 '>
        <img  className="w-full h h-full" src={data?.icon} alt= {data?.alt} />
      </span>
      <span className='text-[#000] text-sm'>{data?.name}</span>
      
        
    </button>
  )
}

export default NavButton