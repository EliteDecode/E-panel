import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { deleteUser } from "firebase/auth";
import Navbar from "../components/Navbar";
import PageHeaders from "../components/PageHeaders";
import { DataGrid } from "@mui/x-data-grid";
import { UsersRows, UsersColumns } from "../data/pageData";
import Avatar from "@mui/material/Avatar";
import { useGlobalContext } from "../context";
import { FaTrash, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../assets/noImage.jpg";

const Products = () => {
  const { color, theme, products, setProducts } = useGlobalContext();
  const [data, setData] = useState([]);

  const textcolor = theme === "Dark" ? "#fff" : "black";
  const background = theme === "Dark" ? "#171717" : "#fff";
  const borderColor = theme === "Dark" ? "#57534e" : "#e5e5e5";

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "products"),
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

  const ProductColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Name",
      headerName: "Product name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center space-x-2">
            <div>
              <Avatar alt="Remy Sharp" src={params.row.img || image} />
            </div>
            <div>
              <h2 className="">{params.row.Name}</h2>
            </div>
          </div>
        );
      },
    },
    { field: "Price", headerName: "Product Price ($)", width: 150 },
    {
      field: "Category",
      headerName: "Product Category",
      width: 140,
    },

    {
      field: "Quantity",
      headerName: "Product Quantity",
      width: 150,
    },
    {
      field: "Brand",
      headerName: "Product Brand",
      width: 150,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
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
        <PageHeaders header="page" info="Products information" />
        <div style={{ height: 510, width: "100%" }} className="my-5 ">
          <DataGrid
            rows={data || products}
            columns={ProductColumns}
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
              fontSize: "14px",
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

export default Products;
