import React from "react";
import "./applicants-overview.styles.scss";
import ApplicationTopbar from "../../components/applicant-topbar/applicant-topbar.component";
import FiltersBar from "../filters-bar/filters-bar.component";
import ApplicantsGroup from "../../components/applicants-group/applicants-group.component";
import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ApplicantsOverview = (props) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [stats, setStats] = useState([]);
  const history = useHistory();
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/dd324fa9-35da-4c47-9b70-26fb209326a1", {
        timeout: 2500,
      })
      .then((result) => {
        setData(result.data);
        console.log("Data");
        console.log(result.data.AppointmentSet);
        setTimeOut(false);
        setStats(prepareStats(result));
        console.log(stats);
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          setTimeOut(true);
          console.log("Timeout");
          return "timeout";
        } else throw error;
      });
  }, []);

  const prepareStats = (result) => {
    return {
      total:
        result.data.AppointmentSet.length +
        result.data.PropertyViewed.length +
        result.data.Interested.length +
        result.data.OfferAccepted.length,
      new: 5,
      viewed: data.PropertyViewed.length,
      appointment: data.AppointmentSet.length,
      others: data.OfferAccepted.length,
    };
  };
  const handleSearchValue = (value) => {
    setSearchValue(value);
    history.push(`/page/?searchValue=${value}`);
  };

  return (
    <div className="applicantsOverview">
      <ApplicationTopbar stats={stats} />

      <FiltersBar handleSearch={handleSearchValue} />

      <ApplicantsGroup
        timeout={timeOut}
        searchValue={searchValue}
        groupName="Appointment Set"
        groupData={data.AppointmentSet}
      />

      <ApplicantsGroup
        timeout={timeOut}
        searchValue={searchValue}
        groupName="Property Viewed"
        groupData={data.PropertyViewed}
      />

      <ApplicantsGroup
        timeout={timeOut}
        searchValue={searchValue}
        groupName="Interested"
        groupData={data.Interested}
      />

      <ApplicantsGroup
        timeout={timeOut}
        searchValue={searchValue}
        groupName="Offer Accepted"
        groupData={data.OfferAccepted}
      />
    </div>
  );
};
export default withRouter(ApplicantsOverview);
