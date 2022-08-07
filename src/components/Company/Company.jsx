import React from "react";
import { useLocation } from "react-router-dom";
import "./Company.css";

const Company = () => {
  const { state } = useLocation();
  const { company } = state || {};

  return (
    <>
      <p className="fund__name">
        {company.name}: {company.description}
      </p>
      <p>
        More company information would go on this page. See TODOs in
        code-challenge-notes.
      </p>
    </>
  );
};

export default Company;
