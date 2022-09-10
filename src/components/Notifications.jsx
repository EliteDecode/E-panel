import React from "react";
import { AiOutlineMail } from "react-icons/ai";
const Notifications = ({ name, icon }) => {
  return (
    <div
      className="border-2 border-gray-400 mt-2  rounded-md dark:border-white  absolute -ml-20 sm:-ml-36 bg-white dark:bg-neutral-900"
      style={{
        height: "200px",
        width: "170px",
        zIndex: "10",
      }}
    >
      {/* <div
        className="p-2 bg-white dark:bg-neutral-900"
        style={{ position: "sticky", top: "0px" }}
      >
        <h3 className="text-md font-bold opacity-80 dark:text-white dark:opacity-100 ">
          {name}
        </h3>
      </div> */}
      <ul className="">
        <li className="border px-3  py-2 flex items-center space-x-2 hover:bg-slate-100 dark:hover:bg-slate-700">
          {" "}
          {icon}
          <span className="font-bold text-sm dark:text-white">Me</span>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
