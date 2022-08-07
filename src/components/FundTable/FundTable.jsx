import React from "react";
import Table from "react-bootstrap/Table";
import "./FundTable.css";
import { useNavigate } from "react-router-dom";
import {
  calculateMultiple,
  convertToPercent,
  formatDate,
  formatToUSD,
} from "../../utils/format";

const FundTable = ({ companies, fundId, tableHeaders }) => {
  let navigate = useNavigate();

  function navigateToCompany(company) {
    let { id } = company;
    navigate(`/fund/${fundId}/company/${id}`, { state: { company } });
  }

  return (
    <div className="fund-table__container" data-testid="fund-table">
      <Table responsive hover className="fund-table">
        <thead>
          <tr>
            {tableHeaders &&
              tableHeaders.map((heading) => <th key={heading}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {companies ? (
            companies.map((company) => (
              <tr key={company.id} onClick={() => navigateToCompany(company)}>
                <td>{company.name}</td>
                <td>{formatToUSD(company.cost)}</td>
                <td>{convertToPercent(company.ownershipPercentage)}%</td>
                <td>{formatToUSD(company.impliedValue)}</td>
                <td>{formatDate(company.founded)}</td>
                <td>
                  {calculateMultiple(company.impliedValue, company.cost)}x
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No results</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default FundTable;
