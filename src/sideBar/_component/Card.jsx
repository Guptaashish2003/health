import React from "react";

const Card = ({profile,name,gender,age,index,setId}) => {

  return (
<<<<<<< HEAD
    <div onClick={()=>setId(index)} className="flex justify-between items-center px-6 py-2 ">
=======
    <div className="flex justify-between items-center px-6 py-2 focus:bg-[#D8FCF7] cursor-pointer" tabIndex={0}>
>>>>>>> 1492be2b766f068d97d8d692564b061212b3affc
      <div className="flex gap-x-2 items-center justify-center capitalize">
        <img
          src={profile}
          alt="profile"
          className="size-10 rounded-full object-cover "
        />
        <div className="text-sm font-semibold">
          <p>{name}</p>
          <p className="text-xs text-[#707070] ">{gender}: {age}</p>
        </div>
      </div>
      <div className="w-4 cursor-pointer">
        <img
          src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
          alt="more"
          width={50}
          height={50}
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default Card;
