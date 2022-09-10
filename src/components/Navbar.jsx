import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMail, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FiMoon, FiSun } from "react-icons/fi";
import { useGlobalContext } from "../context";
import Notifications from "./Notifications";
import Avatar from "@mui/material/Avatar";
import profilePic from "../assets/user15.jpg";

const Navbar = () => {
  const {
    notify,
    message,
    profile,
    handleNotify,
    handleMessage,
    handleProfile,
    handleTheme,
    theme,
    handleSidebar,
    screenSize,
    setScreenSize,
    setSidebar,
    color,
  } = useGlobalContext();

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   if (screenSize <= 900) {
  //     setSidebar(false);
  //   } else {
  //     setSidebar(true);
  //   }
  // }, [screenSize]);

  return (
    <div
      className=" w-full py-5 sm:py-5 px-8 bg-white border-b  border-gray-200 dark:border-neutral-800 dark:bg-neutral-900 "
      style={{
        zIndex: "100",
        position: "sticky",
        top: "0px",
      }}
    >
      <div className="flex justify-between">
        <div className="left flex items-center justify-around space-x-4">
          <GiHamburgerMenu
            className={`text-4xl rounded-sm  
            mr-3 md:mr-0   p-1 dark:text-gray-50 cursor-pointer`}
            onClick={handleSidebar}
            style={{ color }}
          />

          <div
            className={`input hidden items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-1.5 rounded-md md:flex `}
          >
            <BiSearch className="dark:text-gray-50" />
            <input
              type="text"
              className="bg-white dark:bg-neutral-900 dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
              placeholder="What are you looking for?"
              style={{
                border: "none",
                backgroundColor: "none",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div className="right flex space-x-4 items-center">
          <div className="">
            {theme === "Light" ? (
              <FiMoon
                className={`text-3xl sm:text-2xl cursor-pointer`}
                onClick={handleTheme}
                style={{ color }}
              />
            ) : (
              <FiSun
                className={`text-3xl sm:text-2xl  cursor-pointer`}
                onClick={handleTheme}
                style={{ color }}
              />
            )}
          </div>
          <div
            className="icon relative cursor-pointer mx-3 sm:mx-0"
            onClick={handleMessage}
          >
            <AiOutlineMail
              className={`text-3xl sm:text-2xl `}
              style={{ color }}
            />
            <span
              className="absolute border-2 rounded-full bg-red-500 border-red-500  px-1 font-bold -mt-9 ml-3  text-white"
              style={{ fontSize: "9px" }}
            >
              1
            </span>
            {message && (
              <Notifications
                icon={
                  <AiOutlineMail className=" font-bold text-gray-600 dark:text-gray-50" />
                }
                name="Messages"
              />
            )}
          </div>

          <div
            className="icon relative cursor-pointer mx-3 sm:mx-0"
            onClick={handleNotify}
          >
            <MdOutlineNotificationsActive
              className={`text-3xl sm:text-2xl`}
              style={{ color }}
            />
            <span
              className="absolute border-2 rounded-full  px-1 font-bold -mt-9 ml-3  bg-red-500 border-red-500 text-white"
              style={{ fontSize: "9px" }}
            >
              1
            </span>

            {notify && (
              <Notifications
                icon={
                  <MdOutlineNotificationsActive className="font-bold text-gray-600 dark:text-gray-50" />
                }
                name="Notification"
              />
            )}
          </div>

          <div
            className="profil -mt-1 sm:-mt-2 cursor-pointer mx-3 sm:mx-0"
            onClick={handleProfile}
          >
            <Avatar alt="Remy Sharp" src={profilePic} />
            {profile && (
              <div
                className="border-2 mt-3 border-gray-400 rounded-md dark:border-gray-50  absolute -ml-16 bg-white dark:bg-neutral-900"
                style={{
                  width: "100px",
                  zIndex: "10",
                }}
              >
                <div className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2">
                  <AiOutlineUser className=" font-bold text-gray-600 dark:text-gray-50" />
                  <h3 className="text-xs font-semibold opacity-80 dark:text-gray-50 dark:opacity-100 ">
                    Profile
                  </h3>
                </div>
                <div className="flex items-center space-x-2  hover:bg-gray-100 dark:hover:bg-gray-700 p-2">
                  <AiOutlineLogout className=" font-bold text-gray-600 dark:text-gray-50" />
                  <h3 className="text-xs font-semibold opacity-80 dark:text-gray-50 dark:opacity-100 ">
                    Logout
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
