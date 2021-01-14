import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./applicant-topbar.style.scss";
import StatsBar from "./stats-bar/stats-bar.component";

const ApplicationTopbar = () => (
  <div className="applicantTopbar">
    <div className="leftContainer">
      <FiArrowLeft className="iconButton" />
      <span>Applicants</span>
    </div>
    <div>
      <StatsBar />
    </div>
  </div>
);

export default ApplicationTopbar;
