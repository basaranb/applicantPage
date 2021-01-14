import React from "react";
import ReactDOM from "react-dom";
import "./applicants-overview.styles.scss";
import ApplicationTopbar from "../../components/applicant-topbar/applicant-topbar.component";
import FiltersBar from "../filters-bar/filters-bar.component";
import ApplicantsGroup from "../../components/applicants-group/applicants-group.component";
import axios from "axios";
import { useEffect, useState } from "react";

const ApplicantsOverview = () => {
  const [datas, setDatas] = useState([]);

  useEffect(async () => {
    axios
      .get("https://run.mocky.io/v3/b99fed85-3e99-4743-a896-19861c5d82c7")
      .then((response) => {
        setDatas(response.data);
        console.log(datas.data);
      });
  });

  return (
    <div className="applicantsOverview">
      <ApplicationTopbar />
      <FiltersBar />
      <ApplicantsGroup className="appointmentSet" groupName="Appointment Set" />
      <ApplicantsGroup className="propertyViewed" groupName="Property Viewed" />
      <ApplicantsGroup className="interested" groupName="Interested" />
      <ApplicantsGroup className="offerAccepted" groupName="Offer Accepted" />
      {/* <p>{datas}</p> */}
    </div>
  );
};

export default ApplicantsOverview;
