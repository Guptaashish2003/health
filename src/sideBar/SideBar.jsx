import React from "react";
import Card from "./_component/Card";

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
    </div>
  );
};

export default SideBar;
