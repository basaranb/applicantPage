import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./filters-bar.style.scss";
import { useState } from "react";

const FiltersBar = (props) => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <div className="filtersBar">
      <div className="searchBox">
        <AiOutlineSearch className="icon" />
        <input
          key="random1"
          placeholder={"Search for applicant"}
          onChange={(e) => props.handleSearch(e.target.value)}
        />
      </div>
      <div className="bidsFilter">
        <select name="bid" id="bids">
          <option value="volvo">Bids</option>
        </select>
      </div>
      <div className="statusFilter">
        <select name="status" id="status">
          <option value="volvo">Status</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersBar;
