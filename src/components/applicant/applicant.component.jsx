import React from "react";
import { useState } from "react";

import ReactDOM from "react-dom";
import "./applicant.style.scss";

const Applicant = ({
  applicantName,
  applicantPhone,
  applicantEmail,
  applicantAppointmentDate,
  applicantBid,
}) => {
  const [name, setName] = useState(applicantName);
  const [phone, setPhone] = useState(applicantPhone);
  const [email, setEmail] = useState(applicantEmail);
  const [appointmentDate, setAppointmentDate] = useState(
    applicantAppointmentDate
  );
  const [bid, setBid] = useState(applicantBid);

  const initials = (name) => {
    var arr = name.split(/(\s+)/).filter(function (e) {
      return e.trim().length > 0;
    });
    return arr[0][0] + arr[arr.length - 1][0];
  };

  return (
    <div className="applicant">
      <div className="circle">{initials(name)}</div>
      <span>
        <strong>{name}</strong>
      </span>
      <span>{phone}</span>
      <span>{email}</span>
      {appointmentDate ? (
        <div className="greyNtfy">Appointment {appointmentDate}</div>
      ) : null}
      <br />
      {bid ? <div className="orangeNtfy">BID {bid}€</div> : null}
    </div>
  );
};

export default Applicant;
