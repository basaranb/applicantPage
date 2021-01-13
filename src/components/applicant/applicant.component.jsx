import React from "react";
import ReactDOM from "react-dom";
import "./applicant.style.scss";

const Applicant = () => (
  <div className="applicant">
    <div className="circle">BB</div>
    <span>
      <strong>Basaran Badur</strong>
    </span>
    <span>+49 123 213 324</span>
    <span>email@email.com</span>
    <div className="greyNtfy">Appointment 22 JULY</div>
    <br />
    <div className="orangeNtfy">BID 250.000€</div>
  </div>
);

export default Applicant;
