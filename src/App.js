import React, { useEffect, useState } from 'react'
import Nav from './nav/Nav'
import SideBar from './sideBar/SideBar'
import Diahistorycard from './diahistorycard/Diahistorycard';

const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';

const username = 'coalition';
const password = 'skills-test';
const App = () => {
  const [data,setData] = useState([]);
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
  return (
    <>
    <Nav />
    <div className='flex w-full justify-between'>
      <SideBar data={data}/>
      <Diahistorycard/>

    </div>
    </>
  )
}

export default App