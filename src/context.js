import React, { useState, useEffect, useContext } from "react";

import { UsersRows, ProductRows } from "./data/pageData";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const getStorage = () => {
  let theme = "Dark";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const getColor = () => {
  let color = "#1A97F5";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }

  return color;
};

const AppProvider = ({ children }) => {
  const [notify, setNotify] = useState(false);
  const [message, setMessage] = useState(false);
  const [profile, setProfile] = useState(false);
  const [theme, setTheme] = useState(getStorage);
  const [sidebar, setSidebar] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [settings, setSettings] = useState(false);
  const [color, setColor] = useState(getColor);
  const [users, setUsers] = useState(UsersRows);
  const [products, setProducts] = useState(ProductRows);
  const [userdata, setUserData] = useState([]);

  const handleSettings = () => {
    setSettings(!settings);
  };

  const handleSettingsClose = () => {
    setSettings(false);
  };

  const handleSidebar = () => {
    setSidebar(!sidebar);
    console.log("okay");
  };

  const handleNotify = () => {
    setNotify(!notify);
    setProfile(false);
    setMessage(false);
  };

  const handleMessage = () => {
    setMessage(!message);
    setNotify(false);
    setProfile(false);
  };

  const handleProfile = () => {
    setProfile(!profile);
    setNotify(false);
    setMessage(false);
  };

  const setStorage = () => {
    localStorage.setItem("theme", theme);
  };
  useEffect(() => {
    localStorage.setItem("color", "#1A97F5");
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    setStorage();
  }, [theme]);

  const handleTheme = () => {
    if (theme === "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  };

  return (
    <AppContext.Provider
      value={{
        notify,
        message,
        profile,
        theme,
        sidebar,
        screenSize,
        settings,
        color,
        handleNotify,
        handleMessage,
        handleProfile,
        handleTheme,
        handleSidebar,
        setScreenSize,
        setSidebar,
        setTheme,
        handleSettings,
        handleSettingsClose,
        setColor,
        users,
        setUsers,
        products,
        setProducts,

        userdata,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
