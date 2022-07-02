import React from "react";
import Table from "react-bootstrap/Table";
import "./FundTable.css";

const FundTable = ({ fundId, tableHeaders }) => {
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
        <tr>
          {/* From bootstrap */}
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          {Array.from({ length: 5 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default FundTable;
