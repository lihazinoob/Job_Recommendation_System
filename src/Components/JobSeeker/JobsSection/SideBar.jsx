// import { useState } from "react";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

// import SideBarImage from
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const buttonclick = () => {
    setIsOpen(!isOpen);
    console.log("Button Clicked");
  };

  return (
    <>
      <div
        className={`h-screen bg-secondary text-black ${
          isOpen ? "w-64" : "w-20"
        } transition-all duration-300 fixed rounded-2xl shadow-xl mt-1 mb-1 ml-1`}
        >
      </div>
    </>
  );
};

export default SideBar;
