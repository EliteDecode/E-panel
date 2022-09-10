import React from "react";
import Navbar from "../components/Navbar";
import PieComponent from "../components/PieComponent";
import PageHeaders from "../components/PageHeaders";
import {
  pieChartOrdersData,
  pieChartData,
  pieChartUsersData,
  pieChartEarningsData,
} from "../data";
import { useGlobalContext } from "../context";

const PieChart = () => {
  const { color } = useGlobalContext();
  const datas = [
    {
      dataType: pieChartOrdersData,
      dataLabel: "ORDERS",
      offset: "13%",
      id: "orders",
    },
    {
      dataType: pieChartData,
      dataLabel: "SALES",
      offset: "5%",
      id: "sales",
    },
    {
      dataType: pieChartUsersData,
      dataLabel: "USERS",
      offset: "10%",
      id: "users",
    },
    {
      dataType: pieChartEarningsData,
      dataLabel: "EARNINGS",
      offset: "8%",
      id: "earnings",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="my-5 p-3">
        <PageHeaders header="page" info="Analytical pie charts " />
        <div className="grid grid-cols-1 sm:grid-cols-1  gap-2 sm:gap-8 mx-1 sm:mx-3 mt-5 px-1 sm:px-3 sm:px-3 py-5 ">
          {datas.map((data, index) => {
            const { dataType, dataLabel, offset, id } = data;
            return (
              <>
                <div className=" border justify-center dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-lg shadow-md rounded-lg shadow-neutral-600 my-5">
                  <h4 className="font-semibold capitalize text-lg mx-5 mt-2 text-slate-900 text-gray-400 dark:text-white">
                    Total <span style={{ color }}> {dataLabel}</span> analytics
                  </h4>
                  <div key={index} className="flex items-center justify-center">
                    <PieComponent
                      id={id}
                      data={dataType}
                      legendVisiblity={false}
                      height="300px"
                      offset={offset}
                      name={dataLabel}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PieChart;
