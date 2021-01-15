import React from "react";
import "./stat.style.scss";

const Stat = ({ label, number }) => (
  <div className="stat">
    <div className="number">{number}</div>
    <div className="label">{label}</div>
  </div>
);

export default Stat;
