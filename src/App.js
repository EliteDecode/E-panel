import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";

import Ecommerce from "./pages/Ecommerce";

import { useGlobalContext } from "./context";
import { useGlobalAuthContext } from "./authContext";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import EditUser from "./pages/EditUser";
import EditProduct from "./pages/EditProduct";
import AddUser from "./pages/AddUser";
import Users from "./pages/Users";

import LineChart from "./pages/LineChart";
import AreaChart from "./pages/AreaChart";
import PieChart from "./pages/PieChart";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";

const App = () => {
  const { theme, sidebar } = useGlobalContext();
  const { currentUser } = useGlobalAuthContext();

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <>
      <div className={theme === "Dark" ? "dark " : ""}>
        <BrowserRouter>
          <Settings />

          <div className="flex relative">
            <div
              className=" fixed sm:relative bg-white"
              style={{ zIndex: "199", top: "0px" }}
            >
              {sidebar ? (
                <div
                  className=" w-72 md:w-56 dark:bg-neutral-900 bg-white h-screen  border-r border-gray-200 dark:border-neutral-800"
                  style={{
                    position: "sticky",
                    top: "0px",
                  }}
                >
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 h-screen"></div>
              )}
            </div>

            <div className="dark:bg-neutral-800 bg-white w-full">
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Login />} />

                <Route
                  path="/ecommerce"
                  element={
                    <RequireAuth>
                      <Ecommerce />
                    </RequireAuth>
                  }
                />

                {/* pages  */}
                <Route
                  path="/orders"
                  element={
                    <RequireAuth>
                      <Orders />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/products"
                  element={
                    <RequireAuth>
                      <Products />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/users"
                  element={
                    <RequireAuth>
                      <Users />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/user/:userid"
                  element={
                    <RequireAuth>
                      <EditUser />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/product/:productid"
                  element={
                    <RequireAuth>
                      <EditProduct />
                    </RequireAuth>
                  }
                />

                {/* apps  */}
                <Route
                  path="/add_user"
                  element={
                    <RequireAuth>
                      <AddUser />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/add_product"
                  element={
                    <RequireAuth>
                      <AddProduct />
                    </RequireAuth>
                  }
                />

                {/* charts  */}
                <Route
                  path="/line"
                  element={
                    <RequireAuth>
                      <LineChart />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/area"
                  element={
                    <RequireAuth>
                      <AreaChart />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/pie"
                  element={
                    <RequireAuth>
                      <PieChart />
                    </RequireAuth>
                  }
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
