import React from "react";
import "./FundChart.css";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Bar,
} from "recharts";

const WIDTH_MD = 600;
const HEIGHT_MD = 150;

const FundChart = ({ companies }) => {
  return (
    <div className="fund-chart" data-testid="fund-chart">
      <BarChart
        className="fund-chart__bar-chart"
        width={WIDTH_MD}
        height={HEIGHT_MD}
        data={companies}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cost" fill="#8884d8" name="Cost" />
      </BarChart>
      <BarChart
        className="fund-chart__bar-chart"
        width={WIDTH_MD}
        height={HEIGHT_MD}
        data={companies}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="ownershipPercentage"
          fill="#82ca9d"
          name="Ownership Percentage"
        />
      </BarChart>
      <BarChart
        className="fund-chart__bar-chart"
        width={WIDTH_MD}
        height={HEIGHT_MD}
        data={companies}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="impliedValue" fill="#344ceb" name="Implied Value" />
      </BarChart>
    </div>
  );
};

export default FundChart;
