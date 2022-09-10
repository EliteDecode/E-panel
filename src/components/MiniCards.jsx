import React from "react";
import { useGlobalContext } from "../context";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

const MiniCards = ({
  title,
  description,
  amount,
  icon,
  color,
  diff,
  loading,
}) => {
  if (loading)
    return (
      <div
        className="px-3 py-2 border shadow-sm rounded-lg shadow-gray-400 dark:shadow-none hover:shadow-gray-200 cursor-pointer bg-offwhite 
  dark:bg-neutral-900 dark:border-neutral-900 mb-4"
      >
        <div className="flex items-center justify-between ">
          <h1
            className="opacity-90 font-bold uppercase text-xs sm:text-sm text-slate-900 dark:text-white dark:opacity-100"
            style={{ fontSize: "9px" }}
          >
            loading...
          </h1>
          <div className="flex items-center space-x-1">
            {diff < 0 ? (
              <BiChevronDown style={{ color: "red" }} />
            ) : (
              <BiChevronUp style={{ color: "green" }} />
            )}
            <span
              className={` ${
                diff > 0 ? "text-green-400" : "text-red-400"
              }  font-semibold text-xs`}
            >
              0 {""} %
            </span>
          </div>
        </div>
        <div className="my-2">
          <h2
            className="text-slate-900 font-bold text-2xl dark:text-white"
            style={{ fontSize: "14px" }}
          >
            loading...
          </h2>
        </div>
        <div className="flex items-center justify-between ">
          <h1
            className="opacity-90 font-semibold text-xs sm:text-sm  text-sm mt-2 sm:mt-4 text-slate-900 dark:text-white dark:opacity-100"
            style={{ fontSize: "9px" }}
          >
            loading...
          </h1>
        </div>
      </div>
    );

  return (
    <div
      className="px-3 py-2 border shadow-sm rounded-lg shadow-gray-400 dark:shadow-none hover:shadow-gray-200 cursor-pointer bg-offwhite 
    dark:bg-neutral-900 dark:border-neutral-900 mb-4"
    >
      <div className="flex items-center justify-between ">
        <h1 className="opacity-90 font-bold uppercase text-xs sm:text-sm text-slate-900 dark:text-white dark:opacity-100">
          {title}
        </h1>
        <div className="flex items-center space-x-1">
          {diff < 0 ? (
            <BiChevronDown style={{ color: "red" }} />
          ) : (
            <BiChevronUp style={{ color: "green" }} />
          )}
          <span
            className={` ${
              diff > 0 ? "text-green-400" : "text-red-400"
            }  font-semibold text-xs`}
          >
            {diff} {""} %
          </span>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-slate-900 font-bold text-2xl dark:text-white">
          {amount}
        </h2>
      </div>
      <div className="flex items-center justify-between ">
        <h1 className="opacity-90 font-semibold text-xs sm:text-sm  text-sm mt-2 sm:mt-4 text-slate-900 dark:text-white dark:opacity-100">
          {description}
        </h1>
        <div className="flex items-center space-x-1 ">
          <span style={{ background: color }} className="rounded-lg p-2">
            {icon}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MiniCards;
