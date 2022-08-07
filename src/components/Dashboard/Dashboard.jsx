import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const MOCK_DATA = require("../../mocks/funds.json");

const Dashboard = () => {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    const getAllFunds = async () => {
      // Fetch to get data from BE would occur here and return Promise
      setFunds(MOCK_DATA);
    };

    getAllFunds().catch(console.error);
  }, []);

  return (
    <ul className="dashboard" data-testid="dashboard">
      {funds &&
        funds.map((fund) => {
          const path = `/fund/${fund.id}`;
          return (
            <li key={fund.id} className="dashboard__item">
              <Link to={path} state={fund}>
                <h2>{fund.name}</h2>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Dashboard;
