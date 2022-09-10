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
import DetailsCard from "../components/DetailsCard";
import PageHeaders from "../components/PageHeaders";
import Avatar from "@mui/material/Avatar";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import image from "../assets/noImage.jpg";
import { useGlobalContext } from "../context";

import { useNavigate } from "react-router-dom";
import UsersEditForm from "../components/UsersEditForm";

const EditUser = () => {
  const { color } = useGlobalContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [progress, setProgess] = useState("");
  const [imgPercent, setImgPercent] = useState(null);
  const [existingData, setExistingData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { userid } = useParams();

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

  useEffect(() => {
    const q = query(collection(db, "users"), where("Email", "==", userid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const user = [];
      querySnapshot.forEach((doc) => {
        user.push({ id: doc.id, ...doc.data() });
      });

      setUserData(user);
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(false);
    if (Object.keys(data).length !== 0 && data.hasOwnProperty("Email")) {
      try {
        const q = query(
          collection(db, "users"), //Checking if the entered email already exists in the database
          where("Email", "!=", userid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          existingData.push(doc.data().Email); //push existing data to this array
        });

        console.log(existingData);
        if (existingData.includes(data.Email)) {
          setLoading(false);
          setError(true);
        } else {
          //the array is less than 1 or equals it means we have just this user with the mail it means no data was pushed, henced the email doesnt exists
          const signIn = async () => {
            const docRef = await setDoc(
              doc(db, "users", userData[0].id),
              {
                ...data,
                timeStamp: serverTimestamp(),
              },
              { merge: true }
            );
          };
          signIn();
          setError(false);
          setLoading(false);
          navigate("/users");
        }
        setExistingData([]);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      const signIn = async () => {
        const docRef = await setDoc(
          doc(db, "users", userData[0].id),
          {
            ...data,
            timeStamp: serverTimestamp(),
          },
          { merge: true }
        );
      };
      signIn();
      setError(false);
      setLoading(false);
      navigate("/users");
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
                  <span>Create User</span>
                </button>
              </div>
            </Link>
            <DetailsCard data={userData} />
          </div>
          <div className="sm:w-2/3 w-full   mb-3 py-3">
            <form className="sm:p-5 my-2 p-1 sm:mx-5 sm:my-5 dark:bg-neutral-900 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-1  gap-2 sm:gap-8 mx-1 sm:mx-3 mt-5 px-1 sm:px-3 sm:px-3 py-3 ">
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

                <UsersEditForm
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
                    } text-md border-none px-3 -mt-3 sm:-mt-8 w-96 py-2 text-white font-semibold  rounded-lg`}
                    style={{ background: color }}
                    onClick={submit}
                    disabled={
                      (imgPercent !== null && imgPercent < 100) || loading
                    }
                  >
                    {(imgPercent !== null && imgPercent < 100) || loading
                      ? "Please wait..."
                      : " Update User"}
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

export default EditUser;
