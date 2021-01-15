import React from "react";
import "./applicants-overview.styles.scss";
import ApplicationTopbar from "../../components/applicant-topbar/applicant-topbar.component";
import FiltersBar from "../filters-bar/filters-bar.component";
import ApplicantsGroup from "../../components/applicants-group/applicants-group.component";
import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useQueryParam, NumberParam, StringParam } from "use-query-params";

const ApplicantsOverview = (props) => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState([]);
  const history = useHistory();
  const [timeOut, setTimeOut] = useState(false);

  const [foo, setFoo] = useQueryParam("search", StringParam);
  const [searchValue, setSearchValue] = useState(foo);

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
        if (!error.status) {
          setTimeOut(true);
          console.log("Timeout");
          return "timeout";
        } else throw error;
      });
  }, []);

  // function BlogPost() {
  //   let { slug } = useParams();

  console.log("foo");
  console.log(foo);
  // }
  // BlogPost();

  // Prepare the data for number stats
  const prepareStats = (result) => {
    return {
      total:
        result.data.AppointmentSet.length +
        result.data.PropertyViewed.length +
        result.data.Interested.length +
        result.data.OfferAccepted.length,
      new: 5,
      viewed: result.data.PropertyViewed.length,
      appointment: result.data.AppointmentSet.length,
      others: result.data.OfferAccepted.length,
    };
  };
  // Store the search value in url
  const handleSearchValue = (value) => {
    setSearchValue(value);
    //history.push(`/page/?searchValue=${value}`);
    setFoo(value);
  };
  return (
    <div className="applicantsOverview">
      <ApplicationTopbar stats={stats} />
      <FiltersBar handleSearch={handleSearchValue} searchValue={foo} />
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
