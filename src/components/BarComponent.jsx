import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { salesData } from "../data";

const BarComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          top: 20,
          right: 12,
          left: 10,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" />

        <Tooltip />
        <Legend />
        <Bar dataKey="orders" stackId="a" fill="#8884d8" />
        <Bar dataKey="users" stackId="a" fill="#82ca9d" />
        <Bar dataKey="products" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarComponent;
