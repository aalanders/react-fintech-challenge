import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FundTable from "../FundTable/FundTable";
import FundChart from "../FundChart/FundChart";
import Button from "react-bootstrap/Button";
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
  const [toggleChart, setToggleChart] = useState(false);

  const { fundId } = useParams();
  const { companies } = fund || {};

  useEffect(() => {
    const getFund = async () => {
      // This route would also do fetch to the BE service using the fundId, so FE wouldn't have to filter
      const filteredFund = MOCK_DATA.filter(({ id }) => id === Number(fundId));
      setFund(filteredFund[0]);
    };

    getFund().catch(console.error);
  }, [fundId]);

  return (
    fund && (
      <div className="fund" data-testid="fund">
        <h1 className="fund__name">{fund.name}</h1>
        <Button
          type="button"
          variant="outline-primary"
          className="fund__button"
          data-testid="toggle-button"
          onClick={() => setToggleChart(!toggleChart)}
        >
          {toggleChart ? "View Table" : "View Graphs"}
        </Button>
        {fund ? (
          <div className="fund__data">
            {toggleChart ? (
              <FundChart companies={companies} field="cost" />
            ) : (
              <FundTable
                companies={companies}
                fundId={fundId}
                tableHeaders={TABLE_HEADERS}
              />
            )}
          </div>
        ) : (
          <p>This fund has no companies.</p>
        )}
      </div>
    )
  );
};

export default Fund;
