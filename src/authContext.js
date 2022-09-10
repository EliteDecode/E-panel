import React, { useContext, useReducer, useEffect } from "react";
import authReducer from "./authReducer";
const AuthContext = React.createContext();
const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")),
};
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);
  const login = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        currentUser: state.currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// make sure use
export const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
