import React, { useEffect, useState } from "react";
import Card from "./_component/Card";

const SideBar = ({ data, id, setId, setPatientData }) => {
  useEffect(() => {
    setPatientData(data[id]);
  }, [id]);
  const [open, setOpen] = useState(true);
  return (
    <div className="max-xl:w-16 w-[20%]  max-w-[367px]  bg-white rounded-3xl max-h-[90vh] overflow-scroll">
      <div className="flex max-xl:p-3 max-xl:justify-center p-4 justify-between font-semibold border ">
        <h3 className="max-xl:hidden text-lg">Patients</h3>
        <div className="w-4">
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
              setId={setId}
              key={index}
              index={index}
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
