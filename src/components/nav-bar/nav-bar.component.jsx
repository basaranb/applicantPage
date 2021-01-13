import React from "react";
import ReactDOM from "react-dom";
import "./nav-bar.style.scss";
import RightMenu from "./RightMenu/right-menu.component";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/img/logo.png";

const NavBar = () => (
  <div className="nav-bar">
    <div>
      <button className="hamMenuBtn">
        <GiHamburgerMenu className="iconButton" />
      </button>
    </div>
    <div>
      <img className="logo" src={logo} alt="Logo" />
    </div>
    <div className="RightMenu">
      <RightMenu></RightMenu>
    </div>
  </div>
);

export default NavBar;
