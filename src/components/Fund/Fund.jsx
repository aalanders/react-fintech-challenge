import React from "react";
import { useParams } from "react-router-dom";
import FundTable from "../FundTable/FundTable";
import "./Fund.css";

// Header fields would usually be data-driven by BE, for now putting in as static fields
const TABLE_HEADERS = [
  "Name",
  "Cost",
  "Ownership Percentage",
  "Implied Value",
  "Founded",
];

const Fund = () => {
  const { fundId } = useParams();

  return (
    <div className="fund">
      <FundTable fundId={fundId} tableHeaders={TABLE_HEADERS} />
    </div>
  );
};

export default Fund;
