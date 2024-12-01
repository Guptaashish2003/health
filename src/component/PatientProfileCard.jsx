import React from 'react'

const PatientProfileCard = ({data}) => {
    console.log("data",data);
  return (
    <div className='aspect-[367/1216] bg-[#FFF] w-[20%] max-w-[367px] flex flex-col'>
        <span className='aspect-square  size-32'>
            <img className='w-full h-full' src={data?.profile_picture} alt="profile" />
        </span>


    </div>
  )
}

export default PatientProfileCard