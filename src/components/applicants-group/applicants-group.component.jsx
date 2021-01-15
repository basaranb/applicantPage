import React from "react";
import "./applicants-group.style.scss";

import Applicant from "../../components/applicant/applicant.component";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const ApplicantsGroup = ({ groupName, groupData, searchValue, timeout }) => {
  let [loading, setLoading] = useState(true);

  const checkFilter = (group) => {
    // console.log(group);
    if (searchValue) {
      if (group.name.includes(searchValue) || group.email.includes(searchValue))
        return group;
    } else return group;
  };

  useEffect(() => {
    console.log(timeout);
  }, []);

  return (
    <div className="applicantsGroup">
      <div className="groupTitle">
        <h3>
          {groupName} ({groupData ? <span>{groupData.length}</span> : null})
        </h3>
      </div>

      {timeout ? (
        <div className="timeoutError">
          <h2>Request Timed Out</h2>
        </div>
      ) : groupData ? (
        groupData.filter(checkFilter).map((userData) => {
          console.log(userData);
          return (
            <Applicant
              applicantName={userData.name}
              applicantPhone={userData.phone}
              applicantEmail={userData.email}
              applicantAppointmentDate={userData.appointmentDate}
              applicantViewDate={userData.viewDate}
              applicantBid={userData.bid}
            />
          );
        })
      ) : (
        <div className="spinner">
          <ClipLoader loading={loading} />
        </div>
      )}
    </div>
  );
};

export default ApplicantsGroup;
