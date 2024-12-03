import React from 'react'

const LabResultCard = ({data}) => {
   
  return (
    <div className='w-full bg-[#FFFFFF] h-[296px] my-3 rounded-3xl p-2 overflow-y-clip'>
        <h1 className='text-2xl font-semibold mt-2 mb-4 text-[#000]'>Lab Results</h1>
       <div className='overflow-y-scroll max-h-[260px]'>
       {
            data?.map((data) => (
                <button className='flex justify-between px-2 py-2 w-full cursor-pointer focus:bg-[#F6F7F8] focus:rounded-3xl'>
                    <p className='text-[#000] text-sm'>{data}</p>
                    <img src="/assets/download.svg" alt="download" />
                </button >
            ))
        }
       </div>
        
    </div>
  )
}

export default LabResultCard