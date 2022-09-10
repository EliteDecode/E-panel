import React from "react";
import { useGlobalContext } from "../context";

const PageHeaders = ({ header, info }) => {
  const { color } = useGlobalContext();
  return (
    <div>
      <div className="header p-3 border-2 dark:border-neutral-800 dark:bg-neutral-900 rounded-lg bg-offwhite w-full sm:w-96">
        <h1
          className="uppercase opacity-100 sm:opacity-90 text-lg dark:text-white my-2 font-bold "
          style={{ color }}
        >
          {header}
        </h1>
        <p className="capitalize text-md font-semibold dark:text-white ">
          {info}
        </p>
      </div>
    </div>
  );
};

export default PageHeaders;
