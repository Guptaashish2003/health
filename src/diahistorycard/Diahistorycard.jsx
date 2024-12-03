import React from "react";
import { Chart } from "../component/Chart";

const Diahistorycard = () => {
  const BDPressure = [
    {
      title: "Systolic",
      dotColor: "#C26EB4",
      value: "140",
      description: "low the value",
    },
    {
      title: "Diastolic",
      dotColor: "#7E6CAB",
      value: "140",
      description: "low the value",
    },
  ];
  return (
    <div className="w-full h-[65%] bg-[#FFFFFF] rounded-3xl">
      <div className=" grid grid-cols-[0.7fr_0.3fr]">
        <Chart />
        <div>
          {BDPressure.map((item, index) => (
            <div key={index}>
              <div className="flex justify-start gap-x-2 items-center px-4">
                <span
                  style={{ backgroundColor: item.dotColor }}
                  className={`size-2 rounded-full `}
                ></span>
                <h3 className="font-semibold text-md">{item.title}</h3>
              </div>
              <p>{item.value}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Diahistorycard;
