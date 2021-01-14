import React from "react";
import "./applicants-group.style.scss";

import Applicant from "../../components/applicant/applicant.component";

const ApplicantsGroup = ({ groupName }) => (
  <div className="applicantsGroup">
    <div className="groupTitle">
      <h3>{groupName} (3)</h3>
    </div>

    <Applicant
      applicantName="Basaran Badur"
      applicantPhone="13 13 1313 "
      applicantEmail="email@email.com"
      applicantAppointmentDate="22 June"
      applicantBid="250.000"
    />
    {/* <Applicant /> */}
    {/* <Applicant /> */}
  </div>
);

export default ApplicantsGroup;
