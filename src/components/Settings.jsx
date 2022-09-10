import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import { useGlobalContext } from "../context";
import { themeColors } from "../data";

const Settings = () => {
  const {
    setTheme,
    theme,
    handleSettings,
    handleSettingsClose,
    settings,
    color,
    setColor,
    handleSidebar,
  } = useGlobalContext();

  return (
    <div
      style={{
        zIndex: "1000",
        position: "sticky",
        top: "0px",
      }}
    >
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="TopCenter">
            <button
              type="button"
              onClick={handleSettings}
              style={{ background: color, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {settings && (
          <div
            className="h-screen w-full  absolute"
            style={{ zIndex: "10000" }}
          >
            <div className="flex">
              <div
                className="flex-1 sm:flex-4 h-screen bg__transparent__settings"
                onClick={handleSettingsClose}
              ></div>
              <div className="flex-3 sm:flex-1 bg-white dark:bg-slate-900">
                <div className=" py-1 px-3">
                  <div className="flex items-center justify-between mt-4 border-b mb-2 px-3 py-3">
                    <span
                      className={`font-semibold uppercase text-slate-900 dark:text-white `}
                    >
                      Settings
                    </span>
                    <IoMdCloseCircleOutline
                      className={`font-semibold opacity-90 uppercase text-xl cursor-pointer `}
                      onClick={handleSettings}
                      style={{ color }}
                    />
                  </div>
                  <div className="flex flex-col  mt-4 border-b mb-2 px-3 py-3">
                    <span
                      className={`font-semibold  uppercase text-sm text-slate-900 dark:text-white `}
                    >
                      Theme Options
                    </span>
                    <div className="mt-4">
                      <input
                        type="radio"
                        onChange={(e) => setTheme(e.target.value)}
                        id="light"
                        name="theme"
                        value="Light"
                        className="cursor-pointer"
                        checked={theme === "Light"}
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label
                        htmlFor="light"
                        className="ml-2 text-sm cursor-pointer text-slate-900 dark:text-white"
                      >
                        Light
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        type="radio"
                        onChange={(e) => setTheme(e.target.value)}
                        id="dark"
                        name="theme"
                        value="Dark"
                        className="cursor-pointer"
                        checked={theme === "Dark"}
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label
                        htmlFor="dark"
                        className="ml-2 text-sm cursor-pointer text-slate-900 dark:text-white"
                      >
                        Dark
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col mt-4 border-b mb-2 px-3 py-3">
                    <span
                      className={`font-semibold uppercase text-slate-900 dark:text-white `}
                    >
                      Theme Colors
                    </span>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {themeColors.map((item, index) => (
                        <div
                          key={index}
                          content={item.name}
                          position="BottomCenter"
                        >
                          <div
                            className="relative mt-2 cursor-pointer flex gap-5 items-center"
                            key={item.name}
                          >
                            <button
                              type="button"
                              className="h-10 w-10 rounded-full cursor-pointer"
                              style={{ backgroundColor: item.color }}
                              onClick={() => setColor(item.color)}
                            >
                              <BsCheck
                                className={`ml-2 text-2xl text-white ${
                                  item.color === color ? "block" : "hidden"
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="fixed right-4 bottom-4"
                  style={{ zIndex: "1000" }}
                >
                  <TooltipComponent content="Settings" position="TopCenter">
                    <button
                      type="button"
                      onClick={handleSettings}
                      style={{ background: color, borderRadius: "50%" }}
                      className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                      <FiSettings />
                    </button>
                  </TooltipComponent>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
