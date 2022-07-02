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
    <ul className="dashboard">
      {funds &&
        funds.map(({ id, name }, index) => {
          const path = `/fund/${id}`;
          return (
            <li key={index} className="dashboard__item">
              <Link to={path}>
                <h2>{name}</h2>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Dashboard;
