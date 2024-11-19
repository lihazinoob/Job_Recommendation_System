import React, { useState } from "react";
import TopMenuBar from "./TopMenuBar";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
// import "font-awesome/css/font-awesome.min.css";
const MainLayout = () => {
  const [shortListedJobs,setShortListedJobs] = useState([]);


  const addToShortListedJobs = (jobTitle) =>{
    setShortListedJobs([...shortListedJobs,jobTitle]);
    // console.log("Job Title: ",jobTitle);
  }
  return (
    <>
      
      <TopMenuBar/>
      {/* Sidebar and MainBody Component will be side by side */}
      <div className="flex h-screen">
        <SideBar shortListedJobs={shortListedJobs}/>
        <MainBody addToShortListedJobs = {addToShortListedJobs}/>
      </div>
    </>
  );
};

export default MainLayout;
