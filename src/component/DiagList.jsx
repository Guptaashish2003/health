import React from "react";

const DiagList = ({data}) => {
  
  return (
    <div className="w-full max-h-[265px] h-[40%] mt-3 rounded-3xl overflow-y-clip bg-[#FFFFFF]">
      <h1 className="px-3 py-4 mb-4 font-semibold text-2xl">Diagnostic List</h1>
      <div className="overflow-x-hidden  px-2 w-full">
        <div className=" overflow-x-hidden text-start max-h-[180px] w-full overflow-y-scroll ">
          <div className="bg-[#F6F7F8] flex w-full px-3 max-md:text-[4px]  justify-between text-start font-semibold rounded-3xl py-2">
            <p className="text-base w-1/3 max-md:w-full max-md:truncate text-[#000]">Problem/Diagnosis</p>
            <p className="text-base w-1/3 max-md:w-full relative max-sm:left-2   text-[#000]">Description</p>
            <p className="text-base w-1/3 max-md:w-full relative left-36 max-sm:left-3 text-[#000]">Status</p>
          </div>
          <div> 
            {data?.map((data) => (
              <div className="flex w-full text-sm max-sm:text-[10px] px-3 justify-between  text-start py-2">
                <p className=" w-1/3 max-sm:w-full  text-[#000]">{data.name	}</p>
                <p className=" w-1/3 max-sm:w-full relative max-sm:left-2 text-[#000]">{data.description}</p>
                <p className=" w-1/3 max-sm:w-full relative left-36 max-sm:left-7 text-start text-[#000]">{data.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagList;
