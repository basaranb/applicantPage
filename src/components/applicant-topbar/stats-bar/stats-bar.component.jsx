import React from "react";
import "./stats-bar.style.scss";
import Stat from "./stat/stat.component";

const StatsBar = () => (
  <div className="statsBar">
    <Stat />
    <Stat />
    <Stat />
    <Stat />
    <Stat />
  </div>
);

export default StatsBar;
