import React from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FaFlagCheckered } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
const ProductEditForm = ({ handleAdd, userData, error }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-2 sm:gap-8 mx-1 sm:mx-3 mt-0 px-1 sm:px-3 sm:px-3 py-3 ">
      {/* firstname field */}

      <div>
        <label
          htmlFor="Name"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          Name
        </label>
        <div
          className={`${
            error ? "border-rose-400 border-2" : ""
          }input  items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3 mb-2 sm:py-2.5 rounded-md flex `}
        >
          <AiOutlineUser className="dark:text-gray-50" />

          <input
            type="text"
            onChange={handleAdd}
            id="Name"
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder={
              userData[0]?.Name || "Add users Firstname e.g. Jon"
            }
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          />
        </div>
      </div>
      {/* Brand field */}

      <div>
        <label
          htmlFor="Brand"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          Brand
        </label>
        <div
          className={`${
            error ? "border-rose-400 border-2" : ""
          }input  items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3 mb-2 sm:py-2.5 rounded-md flex `}
        >
          <AiOutlineUser className="dark:text-gray-50" />

          <input
            type="text"
            onChange={handleAdd}
            id="LirstName"
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder={userData[0]?.Brand || "update users lastname"}
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          />
        </div>
      </div>
      {/* Price field */}

      <div>
        <label
          htmlFor="Price"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          Price
        </label>
        <div
          className={`${
            error ? "border-rose-400 border-2" : ""
          }input  items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3 mb-2 sm:py-2.5 rounded-md flex `}
        >
          <AiOutlineMail className="dark:text-gray-50" />

          <input
            type="email"
            onChange={handleAdd}
            id="Price"
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder={
              userData[0]?.Price || "Add Price e.g. Jondoe@gmail.com"
            }
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Category field */}

      <div>
        <label
          htmlFor="Category"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          Category
        </label>
        <div
          className={`${
            error ? "border-rose-400 border-2" : ""
          }input  items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3 mb-2 sm:py-2.5 rounded-md flex `}
        >
          <BiLocationPlus className="dark:text-gray-50" />

          <input
            type="text"
            onChange={handleAdd}
            id="Category"
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder={
              userData[0]?.Category || "Add Price e.g. Jondoe@gmail.com"
            }
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          />
        </div>
      </div>
      {/* Category field */}

      <div>
        <label
          htmlFor="country"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          Quantity
        </label>
        <div
          className={`${
            error ? "border-rose-400 border-2" : ""
          }input  items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3 mb-2 sm:py-2.5 rounded-md flex `}
        >
          <FaFlagCheckered className="dark:text-gray-50" />

          <input
            type="text"
            onChange={handleAdd}
            id="Quantity"
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder={
              userData[0]?.Quantity || "Add Price e.g. Jondoe@gmail.com"
            }
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Gender field */}
      <div>
        <label
          htmlFor="sex"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          Gender
        </label>
        <div
          className={`${
            error ? "border-rose-400 border-2" : ""
          }input  items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3 mb-2 sm:py-2.5 rounded-md flex `}
        >
          <AiOutlineUser className="dark:text-gray-50" />
          <select
            id="Sex"
            name="sex"
            onChange={handleAdd}
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder="Add Phone... e.g 090100000000"
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      {/* Category field */}
    </div>
  );
};

export default ProductEditForm;
