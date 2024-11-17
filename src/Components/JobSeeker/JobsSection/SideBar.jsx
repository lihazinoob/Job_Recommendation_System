// import { useState } from "react";
import React, { useState } from "react";

// import SideBarImage from
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const buttonclick = () => {
    // setIsOpen(!isOpen);
    console.log("Button Clicked");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`h-screen bg-secondary text-black transition-all ease-in-out duration-500 ${
          isOpen ? "w-64" : "w-20"
        } fixed rounded-2xl shadow-xl mt-1 mb-1 ml-1`}
      >
        {/* Header section of the sidebar menu */}
        <img
          src="../../../src/assets/images/sidebar.png"
          alt="Sidebar"
          className="w-8 h-8 mt-1 mb-1 ml-1 cursor-pointer"
          onClick={buttonclick}
        />
        {/* Divider */}
        <hr className="border-primary mt-4 mb-6" />

        {/* Sidebar Menu Items */}
        <nav
          className={`flex flex-col space-y-4 px-4 mt-10 transition-all ease-in-out duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#home"
            className="text-lg font-semibold py-2 px-3 rounded-lg transition-all ease-in-out duration-500 hover:bg-black hover:text-white"
          >
            Home
          </a>
          <a
            href="#jobs"
            className="text-lg font-semibold py-2 px-3 rounded-lg transition-all ease-in-out duration-500 hover:bg-black hover:text-white"
          >
            Jobs
          </a>
          <a
            href="#dashboard"
            className="text-lg font-semibold py-2 px-3 rounded-lg transition-all ease-in-out duration-500 hover:bg-black hover:text-white"
          >
            Dashboard
          </a>
          <a
            href="#profile"
            className="text-lg font-semibold py-2 px-3 rounded-lg transition-all ease-in-out duration-500 hover:bg-black hover:text-white"
          >
            Profile
          </a>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
