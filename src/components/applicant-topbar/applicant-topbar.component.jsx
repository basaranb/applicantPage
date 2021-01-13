import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./applicant-topbar.style.scss";
import NumbersBar from "./numbers-bar/numbers-bar.component";

const ApplicationTopbar = () => (
  <div className="applicantTopbar">
    <FiArrowLeft className="iconButton" />
    <span>Applicants</span>
    <NumbersBar />
  </div>
);

export default ApplicationTopbar;
