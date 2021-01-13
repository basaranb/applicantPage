import React from "react";
import ReactDOM from "react-dom";
import "./right-menu.style.scss";
import { FaHeadset } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { GrPowerShutdown } from "react-icons/gr";

const RightMenu = () => (
  <div className="rightMenu">
    <button>
      <div className="contactBtnGrp">
        <FaHeadset className="iconButton" />{" "}
        <span className="contactText">Contact Support</span>
      </div>
    </button>

    <button className="messageBtn">
      <BiMessage className="iconButton" />
    </button>
    <button className="userProfileBtn">
      <HiOutlineUser className="iconButton" />
    </button>
    <button className="logoutBtn">
      <GrPowerShutdown className="iconButton" />
    </button>
  </div>
);

export default RightMenu;
