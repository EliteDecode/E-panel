import React from "react";
import { IoLogoXing, IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import { links } from "../data";
import { useGlobalAuthContext } from "../authContext";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  const { handleSidebar, color } = useGlobalContext();
  const { logout } = useGlobalAuthContext();

  const close = () => {
    logout();
    handleSidebar();
  };

  const activeLink = `flex items-center  p-1 rounded-lg text-white  text-sm `;
  const normalLink = `flex items-center p-1 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:text-white dark:hover:text-white hover:bg-gray-300`;

  return (
    <div className="">
      <div className="flex py-6 px-3 items-center justify-between bg-white dark:bg-neutral-900 border-b dark:border-neutral-800">
        <div className="logo flex space-x-2 items-center dark:text-white  font-bold  text-lg sm:text-md">
          <IoLogoXing style={{ color }} /> <span>E-Panel</span>
        </div>
        <div>
          <IoMdCloseCircleOutline
            className="dark:text-white text-2xl cursor-pointer sm:text-lg"
            onClick={handleSidebar}
            style={{ color }}
          />
        </div>
      </div>

      <div className="links flex flex-col space-y-3 p-3">
        {links.map((link, index) => {
          const { title, links } = link;

          return (
            <div>
              <p
                className="text-gray-400 dark:text-gray-200 mb-0.5 mx-2 uppercase font-bold"
                style={{ fontSize: "12px" }}
              >
                {title}
              </p>

              {links.map((link, index) => {
                const { name, icon } = link;
                return (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? color : "",
                    })}
                  >
                    <div className="flex items-center space-x-2 mx-4 my-1">
                      <span className="">{icon}</span>
                      <span className="capitalize">{name}</span>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          );
        })}
        <div
          className="flex items-center 
         space-x-2 mx-4  py-2 px-1.5 cursor-pointer rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:text-white dark:hover:text-white hover:bg-gray-300"
          onClick={close}
        >
          <span className="">
            <AiOutlineLogout />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
