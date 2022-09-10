import React from "react";
import Navbar from "../components/Navbar";
import { useGlobalContext } from "../context";

import LineComponent from "../components/LineComponent";
import PageHeaders from "../components/PageHeaders";
import {
  EarningsLineData,
  UsersLineData,
  OrdersLineData,
  ProductsLineData,
} from "../data/lineChartData";

const LineChart = () => {
  const datas = [
    {
      dataType: EarningsLineData,
      dataLabel: "earnings",
      desc: "Total Earnings Past in Months",
    },
    {
      dataType: UsersLineData,
      dataLabel: "users",
      desc: "Total Users Activity in Past Months",
    },
    {
      dataType: OrdersLineData,
      dataLabel: "orders",
      desc: "Total Receieved Orders in Past Months",
    },
    {
      dataType: ProductsLineData,
      dataLabel: "products",
      desc: "Total Product Sales in Past Months",
    },
  ];
  const { color } = useGlobalContext();
  return (
    <>
      <Navbar />

      <div className="my-10">
        <div className="my-5 p-3 mx-3">
          <PageHeaders header="page" info="Analytical Linecharts" />

          <div className="px-3 mt-5">
            {datas?.map((data, index) => {
              return (
                <div
                  className="border my-5 dark:border-neutral-800 py-3 dark:bg-neutral-900 shadow-md dark:shadow-lg rounded-lg shadow-neutral-600"
                  id={index}
                >
                  <h4 className="font-semibold capitalize text-md my-5 mx-5 mt-2 text-slate-900 text-gray-400 dark:text-white">
                    {data.desc}
                  </h4>
                  <div className="mt-5" style={{ height: "400px" }}>
                    <LineComponent
                      dataType={data.dataType}
                      dataKey={data.dataLabel}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LineChart;
