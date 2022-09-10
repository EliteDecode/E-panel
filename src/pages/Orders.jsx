import React from "react";
import Navbar from "../components/Navbar";
import PageHeaders from "../components/PageHeaders";
import { DataGrid } from "@mui/x-data-grid";
import { UsersRows, UsersColumns } from "../data/pageData";
import { useGlobalContext } from "../context";

const Orders = () => {
  const { color, theme } = useGlobalContext();

  const textcolor = theme === "Dark" ? "#fff" : "black";
  const background = theme === "Dark" ? "#404040" : "#fff";
  const borderColor = theme === "Dark" ? "#57534e" : "#e5e5e5";
  return (
    <>
      <Navbar />
      <div className="my-5 p-3">
        <PageHeaders header="page" info="Orders" />
        <div style={{ height: 510, width: "100%" }} className="my-5 ">
          <DataGrid
            rows={UsersRows}
            columns={UsersColumns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
            sx={{
              "&. MuiDataGrid-row": {
                borderColor: "red",
              },
              boxShadow: 2,
              color: textcolor,
              background: background,
              border: 2,
              borderColor: borderColor,
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Orders;
