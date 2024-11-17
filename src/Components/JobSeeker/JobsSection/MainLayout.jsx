import React from 'react'
import TopMenuBar from './TopMenuBar'
import SideBar from './SideBar'
import 'font-awesome/css/font-awesome.min.css';
const MainLayout = () => {
  return (
    <>
      <div>
      {/* Top Menu Bar */}
      <TopMenuBar />

      {/* Sidebar and Main Content Wrapper */}
      <div className="flex">
        {/* Sidebar below the navbar */}
        <SideBar/>

        {/* Main Content Area */}
        
      </div>
    </div>

    </>
  )
}

export default MainLayout
