import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useGlobalContext } from "../context";

const AreaComponent = ({ dataType, dataKey }) => {
  const { color, theme } = useGlobalContext();

  const fill = theme === "Dark" ? "#404040" : "#f5f5f5";
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={dataType}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="month" />

        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          fill={fill}
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaComponent;
