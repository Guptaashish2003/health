import React, { Fragment } from "react";
import { Chart } from "../component/Chart";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import Card from "./Card";
import { processChartData } from "../component/Chart";

const Diahistorycard = ({data}) => {
  console.log("data",{data});
  if(!data) return null;
  const chartData = processChartData(data);

  
  const BDPressure = [
    {
      title: "Systolic",
      dotColor: "#C26EB4",
      value: data.at(-1)?.blood_pressure.systolic.value || "N/A",
      description: "low the value",
      icon: <GoTriangleUp />,
    },
    {
      title: "Diastolic",
      dotColor: "#7E6CAB",
      value: data.at(-1)?.blood_pressure.diastolic.value || "N/A",
      description: "low the value",
      icon: <GoTriangleDown />,
    },
  ];
  const report = [
    {
      logo: "/assets/respiratory rate.svg",
      title: "Respiratory Rate",
      value: `${data.at(-1)?.respiratory_rate?.value} bpm` || "N/A",
      description: "Latest respiratory rate",
      color: "#E0F3FA",
    },
    {
      logo: "/assets/temperature.svg",
      title: "Temperature",
      value: `${data.at(-1)?.temperature?.value } °F`|| "N/A",
      description: "Latest body temperature",
      color: "#FFE6E9",
    },
    {
      logo: "/assets/HeartBPM.svg",
      title: "Heart Rate",
      value: `${data.at(-1)?.heart_rate.value} bpm` || "N/A",
      description: "Latest heart rate",
      color: "#FFE6F1",
    },
  ];
  return (
    <div className="w-full h-max rounded-2xl grid bg-white p-4" >
      <h2 className="text-3xl font-semibold my-2">Diagnosis History</h2>
      <div className="grid grid-cols-[0.8fr_auto] max-xl:grid-cols-1 p-4 bg-[#F4F0FE] rounded-xl my-4 w-full">
        <div>
          <Chart chartData={chartData} className="!w-full !h-full" />
        </div>
        <div className="p-2 max-xl:flex max-xl:gap-x-4">
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
                <p className="text-xl  font-semibold" >{item.value} </p>
                <p className="flex gap-x-1 max-sm:text-sm text-lg text-[#072635] items-center">{item.icon} {item.description}</p>
              </div>
            {index === 0 && <hr className="w-full my-4 text-lg max-xl:hidden" />}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-lg:justify-center items-center flex-wrap gap-y-4">
        {report.map((item, index) => (
          <Card key={index} logo={item.logo} title={item.title} value={item.value} description={item.description} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default Diahistorycard;
