import React from "react";
import { useLocation } from "react-router-dom";

const Company = () => {
  const { state } = useLocation();
  const { company } = state || {};

  return <img alt="logo" src={company.logo} />;
};

export default Company;
