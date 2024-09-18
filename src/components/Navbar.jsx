import React from "react";
import logo from "../assets/logo.svg";
import Ellipse from "../assets/Ellipse 53.svg";
import Group from "../assets/Group 1097.svg";
import Group1 from "../assets/Group 1100.svg";
import vector from "../assets/Vector.svg";
function Navbar() {
  return (
    <div className="flex items-center justify-between bg-[#F0F0F0] p-6 shadow-lg">
      <div className="flex">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex">
        <img src={Group} alt="home" className="px-2" />
        <img src={Group1} alt="settings" className="px-2" />
        <img src={vector} alt="notifications" className="px-2" />
        <img src={Ellipse} alt="profile" className="px-2" />
      </div>
    </div>
  );
}

export default Navbar;
