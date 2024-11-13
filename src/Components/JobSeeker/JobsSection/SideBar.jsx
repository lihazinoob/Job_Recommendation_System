import React from "react";
// import SideBarImage from
const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(true);
  const sideBarclick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      {isSideBarOpen ? (
        <div>
          <img
            src="../../src/assets/images/sidebar.png"
            alt=""
            className="w-8 h-8 md:w-10 md:h-10 p-2"
            onClick={sideBarclick}
          />
        </div>
      ) : (
        console.log("Sidebar is closed")
      )}
    </div>
  );
};

export default SideBar;
