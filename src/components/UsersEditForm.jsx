import React from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FaFlagCheckered } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
const UsersEditForm = ({ handleAdd, userData, error }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-2 sm:gap-8 mx-1 sm:mx-3 mt-0 px-1 sm:px-3 sm:px-3 py-3 ">
      {/* firstname field */}

      <div>
        <label
          htmlFor="FirstName"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          FirstName
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
            id="FirstName"
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder={
              userData[0]?.FirstName || "Add users Firstname e.g. Jon"
            }
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          />
        </div>
      </div>
      {/* LastName field */}

      <div>
        <label
          htmlFor="LastName"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          LastName
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
            placeholder={userData[0]?.LirstName || "update users lastname"}
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          />
        </div>
      </div>
      {/* Email field */}

      <div>
        <label
          htmlFor="Email"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          Email
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
            id="Email"
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder={
              userData[0]?.Email || "Add Email e.g. Jondoe@gmail.com"
            }
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* State field */}

      <div>
        <label
          htmlFor="State"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          State
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
            id="State"
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder={
              userData[0]?.State || "Add Email e.g. Jondoe@gmail.com"
            }
            style={{
              border: "none",
              backgroundColor: "none",
              outline: "none",
            }}
          />
        </div>
      </div>
      {/* State field */}

      <div>
        <label
          htmlFor="country"
          className="font-semibold mb-2 text-sm dark:text-gray-100"
        >
          Country
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
            id="Country"
            className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
            placeholder={
              userData[0]?.Country || "Add Email e.g. Jondoe@gmail.com"
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

      {/* State field */}
    </div>
  );
};

export default UsersEditForm;
