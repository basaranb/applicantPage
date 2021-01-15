import React from "react";
import "./stats-bar.style.scss";
import Stat from "./stat/stat.component";

const StatsBar = (props) => (
  <div className="statsBar">
    <Stat label="Total" number={props.stats.total} />
    <Stat label="New" number={props.stats.new} />
    <Stat label="Viewed" number={props.stats.viewed} />
    <Stat label="Appointment" number={props.stats.appointment} />
    <Stat label="Others" number={props.stats.others} />
  </div>
);

export default StatsBar;
