import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import SideBar from "./sideBar/SideBar";
import Diahistorycard from "./diahistorycard/Diahistorycard";
import PatientProfileCard from "./component/PatientProfileCard";
import DiagList from "./component/DiagList";
import LabResultCard from "./component/LabResultCard";

const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

const username = "coalition";
const password = "skills-test";
const App = () => {
  const [data,setData] = useState([]);
  const [id,setId] = useState(0);
  const [patientData,setPatientData] = useState({});
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
   try {
    const getData = async()=>{
      const res = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev/',{method:"GET",headers});
      const data = await res.json();
      console.log(data);
      setData(data);
      setPatientData(data[0]);
    }
    getData()
    setLoading(false);
    
   } catch (error) {
    alert(`try agin later getting error ${error.message}`);
   }
  },[])
  if(loading){
    return <div className='w-screen h-screen justify-center items-center'>loading...</div>
  }
  

  return (
    <div className="w-[98%] mx-auto  overflow-hidden">
      <Nav />
      <div className="mx-auto mt-8 flex max-md:flex-col-reverse justify-between ">
        <SideBar setPatientData={setPatientData} setId={setId} id={id} data={data} />
        <div className="w-[60%]  mx-auto px-2 max-sm:w-full ">
          <Diahistorycard />
          <DiagList data={patientData?.diagnostic_list} />
        </div>
        <div className="w-[20%] max-sm:w-full max-sm:px-2">
          <PatientProfileCard data={patientData} />
          <LabResultCard data={patientData?.lab_results} />
        </div>
      </div>
    </div>
  );
};

export default App;
