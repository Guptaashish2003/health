import React from "react";

const Card = ({profile,name,gender,age,index,setId}) => {

  return (
    <div onClick={()=>setId(index)} className="flex justify-between items-center max-xl:justify-center xl:px-6 py-2 cursor-pointer" tabIndex={0}>
      <div className="flex xl:gap-x-2 items-center justify-center capitalize">
        <img
          src={profile}
          alt="profile"
          className="size-10 rounded-full object-cover border-6 "
        />
        <div className="text-sm font-semibold max-xl:hidden">
          <p>{name}</p>
          <p className="text-xs text-[#707070] ">{gender}: {age}</p>
        </div>
      </div>
      <div className="w-4 max-xl:hidden">
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
