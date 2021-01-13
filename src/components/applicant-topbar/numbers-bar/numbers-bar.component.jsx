import React from "react";
import "./numbers-bar.style.scss";

const NumbersBar = () => (
  <div className="numbersBar">
    <div>
      <div className="number">25</div>
      <div className="label">Total</div>
    </div>
    <div>
      <div className="number">10</div>
      <div className="label">New</div>
    </div>
    <div>
      <div className="number">5</div>
      <div className="label">Viewed</div>
    </div>
    <div>
      <div className="number">3</div>
      <div className="label">Appointment</div>
    </div>
    <div>
      <div className="number">6</div>
      <div className="label">Others</div>
    </div>
  </div>
);

export default NumbersBar;
