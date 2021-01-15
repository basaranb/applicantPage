import React from "react";
import NavBar from "../components/nav-bar/nav-bar.component";
import ApplicantsOverview from "../components/applicants-overview/applicants-overview.component";

const ApplicantsPage = () => (
  <div className="applicantsPage">
    <NavBar />
    <ApplicantsOverview />
  </div>
);

export default ApplicantsPage;
