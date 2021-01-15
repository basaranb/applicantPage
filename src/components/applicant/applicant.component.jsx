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
  // Assign random color style for initial circles
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
        <div className="ntfyContainer">
          <div className="greyNtfy">View Date {applicantViewDate}</div>
        </div>
      ) : null}
      {applicantAppointmentDate ? (
        <div className="ntfyContainer">
          <div className="greyNtfy">Appointment {applicantAppointmentDate}</div>
        </div>
      ) : null}
      {applicantBid ? (
        <div className="ntfyContainer">
          <div className="orangeNtfy">BID {applicantBid}€</div>
        </div>
      ) : null}
    </div>
  );
};
export default Applicant;
