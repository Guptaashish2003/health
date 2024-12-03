import React, { Fragment } from "react";
import { Chart } from "../component/Chart";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import Card from "./Card";

const Diahistorycard = () => {
  const BDPressure = [
    {
      title: "Systolic",
      dotColor: "#C26EB4",
      value: "140",
      description: "low the value",
      icon: <GoTriangleUp />,
    },
    {
      title: "Diastolic",
      dotColor: "#7E6CAB",
      value: "140",
      description: "low the value",
      icon: <GoTriangleDown />,
    },
  ];
  const report = [
    { logo: "/assets/respiratory rate.svg", title: "Respiratory Rate", value: "759", description: "its me",color:"#E0F3FA" },
    { logo: "/assets/temperature.svg", title: "Temperature", value: "759", description: "its me" ,color:"#FFE6E9"},
    { logo: "/assets/HeartBPM.svg", title: "Heart Rate", value: "759", description: "its me",color:"#FFE6F1" },
  ];
  return (
    <div className="w-full h-max rounded-2xl grid bg-white p-4" >
      <h2 className="text-3xl font-semibold my-2">Diagnosis History</h2>
      <div className="grid grid-cols-[0.7fr_auto] p-4 bg-[#F4F0FE] rounded-xl my-4">
        <div>
          <Chart className="w!-full !h-full" />
        </div>
        <div className="p-2 ">
          {BDPressure.map((item, index) => (
            <Fragment>
              <div key={index} className="flex flex-col gap-y-2">
                <div className="flex justify-start gap-x-2 items-center">
                  <span
                    style={{ backgroundColor: item.dotColor }}
                    className={`size-2 rounded-full `}
                  ></span>
                  <h3 className="font-semibold text-md">{item.title}</h3>
                </div>
                <p>{item.value}</p>
                <p className="flex gap-x-1 text-sm text-[#072635] items-center">{item.icon} {item.description}</p>
              </div>
            {index === 0 && <hr className="w-full my-4 text-lg" />}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        {report.map((item, index) => (
          <Card key={index} logo={item.logo} title={item.title} value={item.value} description={item.description} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default Diahistorycard;
