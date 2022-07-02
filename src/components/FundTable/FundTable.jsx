import React from "react";
import Table from "react-bootstrap/Table";
import "./FundTable.css";
import { useNavigate } from "react-router-dom";

const FundTable = ({ companies, fundId, tableHeaders }) => {
  let navigate = useNavigate();

  function handleRowClick(company) {
    let { id } = company;
    navigate(`/fund/${fundId}/company/${id}`, { state: { company } });
  }

  return (
    <Table responsive hover className="fund-table">
      <thead>
        <tr>
          {tableHeaders &&
            tableHeaders.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {companies ? (
          companies.map((company, index) => (
            <tr key={index} onClick={() => handleRowClick(company)}>
              <td>
                <img
                  className="data-table__img"
                  alt="company logo"
                  src={company.logo}
                />
              </td>
              <td>{company.cost}</td>
              <td>{company.ownershipPercentage}%</td>
              <td>{company.impliedValue}</td>
              <td>{company.founded}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No results</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default FundTable;
