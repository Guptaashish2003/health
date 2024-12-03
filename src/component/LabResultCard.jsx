import React from 'react'

const LabResultCard = ({data}) => {
    console.log(data)
  return (
    <div className='w-full bg-[#FFFFFF] h-[296px] rounded-3xl p-2 mt-3 overflow-y-clip'>
        <h1 className='text-2xl font-semibold mt-2 mb-4 text-[#000]'>Lab Results</h1>
       <div className='overflow-y-scroll max-h-[260px]'>
       {
            data?.map((data) => (
                <div className='flex justify-between px-2 py-2 cursor-pointer focus:bg-[#F6F7F8]'>
                    <p className='text-[#000] text-sm'>{data}</p>
                    <img src="/assets/download.svg" alt="download" />
                </div>
            ))
        }
       </div>
        
    </div>
  )
}

export default LabResultCard