import React, { useState, useEffect } from "react";
import {
  collection,
  serverTimestamp,
  setDoc,
  doc,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import Navbar from "../components/Navbar";
import PageHeaders from "../components/PageHeaders";

import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import { UsersInput } from "../data/inputData";
import Avatar from "@mui/material/Avatar";
import { AiOutlineUser, AiOutlineCloudUpload } from "react-icons/ai";
import image from "../assets/noImage.jpg";

const AddUser = () => {
  const { color } = useGlobalContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [progress, setProgess] = useState("");
  const [imgPercent, setImgPercent] = useState(null);
  const [existingData, setExistingData] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

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

  //setting data of inputs with the onChange Function
  const handleAdd = (e) => {
    const password = 123456; //setting defualt password for each user
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value, Password: password });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const q = query(
        collection(db, "users"), //Checking if the entered email already exists in the database
        where("Email", "==", data.Email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        existingData.push(doc.data().Email); //push existing data to this array
      });

      if (existingData.length === 0) {
        // if the array is empty it means no data was pushed, henced the email doesnt exists
        const signIn = async () => {
          const docRef = await addDoc(collection(db, "users"), {
            ...data,
            timeStamp: serverTimestamp(),
          });
        };
        signIn();
        setError(false);
        setLoading(false);
        navigate("/users");
      } else {
        setError(true);
        setLoading(false);
      }
      setExistingData([]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="my-5 p-3">
        <PageHeaders header="page" info="Add User" />
        <form className="sm:py-5 my-5 py-1 sm:mx-5 sm:my-5 dark:bg-neutral-900 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3  gap-2 sm:gap-8 mx-1 sm:mx-1 mt-5 px-1 sm:px-3 sm:px-3 py-3 ">
            {/* picture field */}

            <div className=" justify-center items-center flex flex-col  -mt-8">
              <Avatar
                alt="Remy Sharp"
                src={file ? URL.createObjectURL(file) : image}
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

            {/* firstname field */}
            {UsersInput.map((input) => {
              const { name, id, type, placeholder, icon } = input;
              return (
                <div>
                  <label
                    htmlFor={name}
                    className="font-semibold mb-2 text-sm dark:text-gray-100"
                  >
                    {id}
                  </label>
                  <div
                    className={`${
                      error ? "border-rose-400 border-2" : ""
                    }input items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3 mb-2 sm:py-2.5 rounded-md flex `}
                  >
                    {icon}

                    <input
                      type={type}
                      onChange={handleAdd}
                      required
                      id={id}
                      className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
                      placeholder={placeholder}
                      style={{
                        border: "none",
                        backgroundColor: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Gender field */}
            <div>
              <label
                htmlFor="sex"
                className="font-semibold mb-2 text-sm dark:text-gray-100"
              >
                Gender
              </label>
              <div
                className={`${
                  error ? "border-rose-400 border-2" : ""
                }input  items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3  sm:py-2.5 rounded-md flex `}
              >
                <AiOutlineUser className="dark:text-gray-50" />
                <select
                  id="Sex"
                  name="sex"
                  onChange={handleAdd}
                  className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
                  placeholder="Add Phone... e.g 090100000000"
                  style={{
                    border: "none",
                    backgroundColor: "none",
                    outline: "none",
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* State field */}
            <div>
              {error && (
                <span className="text-xs text-red-500 -mt-10">
                  This Email Already exists exists, please check again{" "}
                </span>
              )}
              <button
                type="submit"
                className={`${
                  (imgPercent !== null && imgPercent < 100) || loading
                    ? "disabled cursor-not-allowed"
                    : ""
                } text-md border-none px-3 mt-6 py-2 text-white font-semibold w-full rounded-lg`}
                style={{ background: color }}
                onClick={submit}
                disabled={(imgPercent !== null && imgPercent < 100) || loading}
              >
                {(imgPercent !== null && imgPercent < 100) || loading
                  ? "Please wait..."
                  : " Create User"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
