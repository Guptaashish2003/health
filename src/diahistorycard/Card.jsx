import React from "react";

const Card = ({logo,title,value,description,color}) => {
  
  return <div style={{backgroundColor: color}} className="w-[228px] px-3 py-4 rounded-xl flex flex-col justify-between ">
    <img src={logo} alt="logo" className="size-24 rounded-full object-cover" />
    <div className="mt-2 mb-4">
      <h4 className="text-[#072635] text-base ">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    <p className="text-[#072635] text-sm">{description}</p>
  </div>;
};

export default Card;
