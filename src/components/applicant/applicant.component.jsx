import React from "react";
import { useState, useEffect } from "react";

import "./applicant.style.scss";

const Applicant = ({
  applicantName,
  applicantPhone,
  applicantEmail,
  applicantAppointmentDate,
  applicantViewDate,
  applicantBid,
}) => {
  const [color, setColor] = useState(null);
  // Get the initial lettes for the names
  const initials = (name) => {
    var arr = name.split(/(\s+)/).filter(function (e) {
      return e.trim().length > 0;
    });
    return arr[0][0] + arr[arr.length - 1][0];
  };

  useEffect(() => {
    const classes = ["pinkCircle", "blueCircle", "greenCircle", "yellowCircle"];
    setColor(classes[Math.floor(Math.random() * classes.length)]);
  }, []);

  return (
    <div className="applicant">
      <div className={color}>{initials(applicantName)}</div>
      <span>
        <strong>{applicantName}</strong>
      </span>
      <span>{applicantPhone}</span>
      <span>{applicantEmail}</span>
      {applicantViewDate ? (
        <div className="greyNtfy">View Date {applicantViewDate}</div>
      ) : null}
      {applicantAppointmentDate ? (
        <div className="greyNtfy">Appointment {applicantAppointmentDate}</div>
      ) : null}
      <br />
      {applicantBid ? (
        <div className="orangeNtfy">BID {applicantBid}€</div>
      ) : null}
    </div>
  );
};

export default Applicant;
