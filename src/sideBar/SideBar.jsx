import React from "react";
import Card from "./_component/Card";

<<<<<<< HEAD
const SideBar = ({data,setId}) => {
  return (
    <div className='w-[90%] max-w-[367px] mt-8 bg-white rounded-3xl max-h-[90vh] overflow-scroll'>
        <div className='flex p-4 justify-between font-semibold border '>
            <h3 className=' text-lg'>Patients</h3>
            <div className='w-4'>
                <img src="/assets/search_FILL0_wght300_GRAD0_opsz24.svg" alt="search" width={50} height={50} className='w-full h-full ' />
            </div>
        </div>
        <div>
            {data?.map((item,index)=>{
                return <Card setId={setId} key={index} index={index} profile={item.profile_picture} name={item.name} gender={item.gender} age={item.age} />
            })}
            
        </div>
      
=======
const SideBar = ({ data }) => {
  return (
    <div className="w-[90%] max-w-[367px] bg-white rounded-2xl max-h-[90vh] overflow-scroll">
      <div className="flex p-4 justify-between font-semibold">
        <h3 className=" text-lg">Patients</h3>
        <div className="w-4 cursor-pointer">
          <img
            src="/assets/search_FILL0_wght300_GRAD0_opsz24.svg"
            alt="search"
            width={50}
            height={50}
            className="w-full h-full "
          />
        </div>
      </div>
      <div>
        {data?.map((item, index) => {
          return (
            <Card
              key={index}
              profile={item.profile_picture}
              name={item.name}
              gender={item.gender}
              age={item.age}
            />
          );
        })}
      </div>
>>>>>>> 1492be2b766f068d97d8d692564b061212b3affc
    </div>
  );
};

export default SideBar;
