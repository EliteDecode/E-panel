import React, { useEffect } from "react";
import { useGlobalAuthContext } from "../authContext";

const Logout = () => {
  const { logout } = useGlobalAuthContext();

  useEffect(() => {
    logout();
  }, []);
  return <p>logout</p>;
};

export default Logout;
