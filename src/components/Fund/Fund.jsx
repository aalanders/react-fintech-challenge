import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FundTable from "../FundTable/FundTable";
import "./Fund.css";

const MOCK_DATA = require("../../mocks/funds.json");

// Header fields would usually be data-driven by BE, for now putting in as static fields
const TABLE_HEADERS = [
  "Name",
  "Cost",
  "Ownership Percentage",
  "Implied Value",
  "Founded",
  "Multiple",
];

const Fund = () => {
  const [fund, setFund] = useState({});
  const { fundId } = useParams();
  const { companies } = fund;

  useEffect(() => {
    const getFund = async () => {
      // This would be a fetch to the BE service using the fundId, so FE wouldn't have to filter
      const filteredFund = MOCK_DATA.filter(({ id }) => id === Number(fundId));
      setFund(filteredFund[0]);
    };

    getFund().catch(console.error);
  }, [fundId]);

  return (
    <div className="fund">
      <h1>{fund.name}</h1>
      {fund ? (
        <FundTable
          companies={companies}
          fundId={fundId}
          tableHeaders={TABLE_HEADERS}
        />
      ) : (
        <p>This fund has no companies.</p>
      )}
    </div>
  );
};

export default Fund;
