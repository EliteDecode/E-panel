import React from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import { useGlobalContext } from "../context";
import image from "../assets/noImage.jpg";
import { FaFlagCheckered } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

const DetailsCard = ({ data }) => {
  const { users, color } = useGlobalContext();

  return (
    <div className=" p-3 rounded-lg dark:bg-neutral-900">
      <div className="flex space-x-4 items-center">
        <Avatar alt="Remy Sharp" src={data[0]?.img || image} className="mt-1" />
        <div className="flex flex-col">
          <h3 className="font-semibold text-md dark:text-white">
            {data[0]?.FirstName || "Loading..."} {""}
            {data[0]?.LirstName || "Loading..."}
          </h3>
          <p className="font-neutral text-xs dark:text-white">
            {data[0]?.Country || "Loadding..."}
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-3 my-4">
        <h2 className="text-gray-200 font-semibold text-sm">Contact Details</h2>
        <div className="flex space-x-2 items-center">
          <AiOutlineMail className="text-xs" style={{ color: color }} />
          <span className="text-xs dark:text-white">
            {data[0]?.Email || "Loading..."}
          </span>
        </div>
        <div className="flex space-x-2 items-center">
          <BiLocationPlus className="text-xs" style={{ color: color }} />
          <span className="text-xs dark:text-white">
            {data[0]?.State || "Loading..."}
          </span>
        </div>
        <div className="flex space-x-2 items-center">
          <FaFlagCheckered className="text-xs" style={{ color: color }} />
          <span className="text-xs dark:text-white">
            {data[0]?.Country || "Loading..."}
          </span>
        </div>
        <div className="flex space-x-2 items-center">
          <AiOutlineUser className="text-xs" style={{ color: color }} />
          <span className="text-xs dark:text-white">
            {data[0]?.Sex || "Loading..."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
