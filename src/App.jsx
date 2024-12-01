import React, { useEffect, useState } from 'react'
import Nav from './nav/Nav'
import SideBar from './sideBar/SideBar'

const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';

const username = 'coalition';
const password = 'skills-test';
const App = () => {
  const [data,setData] = useState([]);
  const [id,setId] = useState(0);
  const [patientData,setPatientData] = useState({});
  useEffect(()=>{
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    const getData = async()=>{
      const res = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev/',{method:"GET",headers});
      const data = await res.json();
      console.log(data);
      setData(data);
    }
    getData()
  },[])
  useEffect(()=>{
    setPatientData(data[id]);
  }
  ,[id])
  return (
    <div className='w-[98%] mx-auto'>
      <Nav />
      <SideBar setId={setId} data={data}/>
    </div>
  )
}

export default App