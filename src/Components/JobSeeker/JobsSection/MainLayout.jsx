import React from "react";
import TopMenuBar from "./TopMenuBar";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import "font-awesome/css/font-awesome.min.css";
const MainLayout = () => {
  return (
    <>

      <TopMenuBar  />
      {/* Sidebar and MainBody Component will be side by side */}
      <div className="flex h-screen">
        <SideBar className="fixed"/>
        <MainBody/>
      </div>
    </>
  );
};

export default MainLayout;
