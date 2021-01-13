import React from "react";
import ReactDOM from "react-dom";
import "./applicants-overview.styles.scss";

import Applicant from "../../components/applicant/applicant.component";
import ApplicationTopbar from "../../components/applicant-topbar/applicant-topbar.component";

const ApplicantsOverview = () => (
  <div className="applicantsOverview">
    <ApplicationTopbar />
    <Applicant></Applicant>
    {/* <ApplicantsTopbar />
    <FiltersBar />
    <ApplicantGroup className="appointmentSet" />
    <ApplicantGroup className="propertyViewed" />
    <ApplicantGroup className="interested" />
    <ApplicantGroup className="offerAccepted" />
    <ApplicantGroup /> */}
  </div>
);

export default ApplicantsOverview;
