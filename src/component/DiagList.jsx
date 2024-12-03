import React from "react";

const DiagList = ({data}) => {
  console.log(data)
  
  return (
    <div className="w-full max-h-[373px] mt-3 rounded-3xl bg-[#FFFFFF]">
      <h1 className="px-3 py-4 text-xl">Diagnostic List</h1>
      <div className="overflow-x-auto px-2 w-full">
        <div className=" overflow-x-hidden text-start w-full overflow-y-scroll">
          <div className="bg-[#F6F7F8] flex w-full px-3   justify-between text-start font-semibold rounded-3xl py-4">
            <p className="text-base w-1/3 text-[#000]">Problem/Diagnosis</p>
            <p className="text-base w-1/3  relative  text-[#000]">Description</p>
            <p className="text-base w-1/3 relative left-36 text-[#000]">Status</p>
          </div>
          <div> 
            {data?.map((data) => (
              <div className="flex w-full text-sm px-3 justify-between  text-start py-2">
                <p className=" w-1/3 text-[#000]">{data.name	}</p>
                <p className=" w-1/3 text-[#000]">{data.description}</p>
                <p className=" w-1/3 relative left-36 text-start text-[#000]">{data.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagList;
