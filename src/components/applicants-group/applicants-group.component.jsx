import React from "react";
import "./applicants-group.style.scss";

import Applicant from "../../components/applicant/applicant.component";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ScrollContainer from "react-indiana-drag-scroll";
const ApplicantsGroup = ({ groupName, groupData, searchValue, timeout }) => {
  let [loading] = useState(true);

  // Filter function for search bar
  const checkFilter = (group) => {
    if (searchValue) {
      if (
        group.name.includes(searchValue) ||
        group.email.includes(searchValue) ||
        group.phone.includes(searchValue)
      )
        return group;
    } else return group;
  };

  return (
    <div className="applicantsGroup">
      <div className="groupTitle">
        <h3>
          {groupName} (
          {groupData ? (
            <span>{groupData.filter(checkFilter).length}</span>
          ) : null}
          )
        </h3>
      </div>
      <ScrollContainer>
        <div className="applicantsContainer">
          {timeout ? (
            <div className="timeoutError">
              <h2>Request Timed Out</h2>
            </div>
          ) : groupData ? (
            groupData.filter(checkFilter).map((userData) => {
              console.log(userData);
              return (
                <Applicant
                  className="applicant"
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
      </ScrollContainer>
    </div>
  );
};

export default ApplicantsGroup;
