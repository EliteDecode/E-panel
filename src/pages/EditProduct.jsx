import React, { useState, useEffect } from "react";
import {
  collection,
  serverTimestamp,
  setDoc,
  doc,
  addDoc,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductDetailsCard from "../components/ProductDetailsCard";
import PageHeaders from "../components/PageHeaders";
import Avatar from "@mui/material/Avatar";
import { AiOutlineUser, AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import image from "../assets/product1.jpg";
import { useGlobalContext } from "../context";
import { ProductsInput } from "../data/inputData";
import ProductEditForm from "../components/ProductEditForm";

const EditProduct = () => {
  const { products, color } = useGlobalContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [progress, setProgess] = useState("");
  const [imgPercent, setImgPercent] = useState(null);

  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { productid } = useParams();

  /* A useEffect hook that is watching the file state and when it changes it will run the code inside
 the hook. For image upload to firestore storgae */
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.ceil(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgess("Upload is " + progress + "% done");
          setImgPercent(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleAdd = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  useEffect(() => {
    let list = [];
    const unsub = onSnapshot(doc(db, "products", productid), (doc) => {
      list.push({ id: doc.id, ...doc.data() });
      setUserData(list);
    });
  }, []);
  console.log(userData);

  const submit = () => {
    setLoading(true);
    try {
      const addProduct = async () => {
        const docRef = await setDoc(
          doc(db, "products", userData[0].id),
          {
            ...data,
            timeStamp: serverTimestamp(),
          },
          { merge: true }
        );
      };
      addProduct();
      setLoading(false);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="my-5 p-3">
        <div className="">
          <PageHeaders header="page" info="Edit User" />
        </div>
        <div className="flex flex-wrap items-center w-full my-5 ">
          <div className="w-full sm:w-1/3 mb-3 py-3 ">
            <Link to="/add_user">
              <div className=" my-4 ">
                <button
                  type="submit"
                  className="text-md border-none p-3 flex items-center space-x-4 text-white font-semibold w-full rounded-lg"
                  style={{ background: color }}
                  onClick={submit}
                >
                  <AiOutlineUserAdd />
                  <span>Create Product</span>
                </button>
              </div>
            </Link>
            <ProductDetailsCard data={userData} />
          </div>
          <div className="sm:w-2/3 w-full   mb-3 py-3">
            <form className="sm:py-5 my-5 py-1 sm:mx-5 sm:my-5 dark:bg-neutral-900 rounded-lg">
              <div className=" mx-1 sm:mx-1 mt-5 px-1 sm:px-3 sm:px-3 py-3 ">
                {/* picture field */}

                <div className=" justify-center  items-center flex flex-col  -mt-8">
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : userData[0]?.img || image
                    }
                    className="mt-1"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <label for="File" className=" ml-20  dark:text-white ">
                    <AiOutlineCloudUpload className="text-xl cursor-pointer" />
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="File"
                    hidden
                    onChange={(e) => setFile(e.target.files[0])}
                  />

                  {imgPercent !== null && (
                    <span className="text-green-400 text-xs mt-1 font-semibold">
                      {progress}
                    </span>
                  )}
                </div>

                <ProductEditForm
                  error={error}
                  userData={userData}
                  handleAdd={handleAdd}
                />

                {error && (
                  <div className="text-xs text-red-500 -mt-7 flex justify-center items-center sm:-mt-10">
                    <h6>
                      {" "}
                      This Email Already exists exists, please check again{" "}
                    </h6>
                  </div>
                )}
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className={`${
                      (imgPercent !== null && imgPercent < 100) || loading
                        ? "disabled cursor-not-allowed"
                        : ""
                    } text-md border-none px-3  w-96 py-2 text-white font-semibold  rounded-lg`}
                    style={{ background: color }}
                    onClick={submit}
                    disabled={
                      (imgPercent !== null && imgPercent < 100) || loading
                    }
                  >
                    {(imgPercent !== null && imgPercent < 100) || loading
                      ? "Please wait..."
                      : " Update Product"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
