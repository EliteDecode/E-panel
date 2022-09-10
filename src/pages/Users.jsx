import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { deleteUser } from "firebase/auth";
import Navbar from "../components/Navbar";
import PageHeaders from "../components/PageHeaders";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import { useGlobalContext } from "../context";
import { useGlobalAuthContext } from "../authContext";
import { FaTrash, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../assets/noImage.jpg";

const Users = () => {
  const { color, theme, users, setUsers, userdata, setUserData } =
    useGlobalContext();
  const [data, setData] = useState([]);
  const textcolor = theme === "Dark" ? "#fff" : "black";
  const background = theme === "Dark" ? "#171717" : "#fff";
  const borderColor = theme === "Dark" ? "#57534e" : "#e5e5e5";

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setUserData(userdata.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      orderBy("timeStamp", "desc"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  console.log(userdata);

  const UsersColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "FirstName",
      headerName: "First name",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="flex items-center space-x-2">
            <div>
              <Avatar alt="Remy Sharp" src={params.row.img || image} />
            </div>
            <div>
              <h2 className="">{params.row.FirstName}</h2>
            </div>
          </div>
        );
      },
    },
    { field: "LirstName", headerName: "Last name", width: 130 },
    {
      field: "Email",
      headerName: "Email",
      width: 200,
    },

    {
      field: "Sex",
      headerName: "Sex",
      width: 100,
    },
    {
      field: "State",
      headerName: "State",
      width: 160,
    },
    {
      field: "Country",
      headerName: "Country",
      width: 120,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.Email}`}>
              <span>
                <FaPen className="text-blue-400 text-md mx-2 cursor-pointer" />
              </span>
            </Link>
            <span>
              <FaTrash
                className="text-red-400 text-md mx-2 cursor-pointer "
                onClick={() => handleDelete(params.row.id)}
              />
            </span>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Navbar />
      <div className="my-5 p-3">
        <PageHeaders header="page" info="users information" />
        <div style={{ height: 510, width: "100%" }} className="my-5 ">
          <DataGrid
            rows={data || users}
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
              textTransform: "Capitalize",
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

export default Users;
