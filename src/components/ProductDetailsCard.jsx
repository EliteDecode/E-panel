import React from "react";
import {
  AiOutlineUser,
  AiFillDollarCircle,
  AiOutlineBranches,
} from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import { useGlobalContext } from "../context";
import image from "../assets/noProduct.png";
import { FaFlagCheckered } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { GoDiffRenamed } from "react-icons/go";
import { GiOilDrum } from "react-icons/gi";
import millify from "millify";

const ProductDetailsCard = ({ data }) => {
  const { products, color } = useGlobalContext();
  console.log(data);
  return (
    <div className=" p-3 rounded-lg dark:bg-neutral-900">
      <div className="flex items-center space-x-2">
        <Avatar
          alt="Remy Sharp"
          src={data[0]?.img || image}
          className="mt-1"
          style={{ width: "60px", height: "60px" }}
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-md dark:text-white ">
            {data[0]?.Name || "Iphone X"} {""}
          </h3>
          <p className="font-neutral text-xs dark:text-white">
            {data[0]?.Brand || "$3,000"}
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-3 my-4">
        <h2 className="text-gray-200 font-semibold text-sm">Product Details</h2>
        <div className="flex space-x-2 items-center">
          <GoDiffRenamed className="text-sm" style={{ color: color }} />
          <p className="text-sm dark:text-white flex items-center space-x-2 ">
            <span className="font-bold" style={{ color }}>
              Product Name:{" "}
            </span>{" "}
            <span>{data[0]?.Name || "IphoneX"}</span>
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <AiFillDollarCircle className="text-sm" style={{ color: color }} />
          <p className="text-sm dark:text-white flex items-center space-x-2 ">
            <span className="font-bold" style={{ color }}>
              Product Price:
            </span>{" "}
            <span>$ {millify(data[0]?.Price || "200000")}</span>
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <AiOutlineBranches className="text-sm" style={{ color: color }} />
          <p className="text-sm dark:text-white flex items-center space-x-2 ">
            <span className="font-bold" style={{ color }}>
              Product Category:
            </span>{" "}
            <span> {data[0]?.Category || "Phones"}</span>
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <SiBrandfolder className="text-sm" style={{ color: color }} />
          <p className="text-sm dark:text-white flex items-center space-x-2 ">
            <span className="font-bold" style={{ color }}>
              Product Brand:
            </span>{" "}
            <span>{data[0]?.Brand || "Apple"}</span>
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <GiOilDrum className="text-sm" style={{ color: color }} />
          <p className="text-sm dark:text-white flex items-center space-x-2 ">
            <span className="font-bold" style={{ color }}>
              Product Quantity:
            </span>{" "}
            <span>{data[0]?.Quantity || "30"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
