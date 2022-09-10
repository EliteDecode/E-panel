import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AiOutlineUser } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { IoLogoXing } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useGlobalAuthContext } from "../authContext";

const Login = () => {
  const { color } = useGlobalContext();
  const { login } = useGlobalAuthContext();
  // Login credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const borderColor = error ? "red" : color;
  const borderColor2 = error ? "red" : "";
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(false);
        setLoading(false);
        const user = userCredential.user;
        login(user);
        navigate("/ecommerce");

        console.log(user);

        // ...
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div className="h-screen bg-gray-100 dark:bg-neutral-900 flex items-center justify-center  p-5">
      <div className="py-5 -mt-5 sm:mt-5">
        <form
          onSubmit={handleLogin}
          className="border-2 px-3 py-6 w-80 sm:w-96 mx-5 bg-white dark:bg-neutral-800 rounded-lg shadow-xl"
          style={{ borderColor: borderColor }}
        >
          <div className="logo flex space-x-2 items-center justify-center mb-4 dark:text-white  font-bold  text-lg sm:text-md">
            <IoLogoXing style={{ color }} /> <span>E-Panel</span>
          </div>
          <div className="mb-5">
            <label
              htmlFor="Email"
              className="font-normal mb-2 text-sm dark:text-gray-200"
            >
              Email
            </label>
            <div
              className={`input  items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3 mb-2 sm:py-2.5 rounded-md flex `}
              style={{ borderColor: borderColor2 }}
            >
              <AiOutlineUser className="dark:text-gray-50" />

              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                id="Email"
                className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
                placeholder="Email e.g. sirelite11@gmail.com"
                style={{
                  border: "none",
                  backgroundColor: "none",
                  outline: "none",
                }}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Password"
              className="font-normal mb-2 text-sm dark:text-gray-200"
            >
              Password
            </label>
            <div
              className={`input  items-center border-2 
           dark:bg-neutral-900  bg-white  px-3 py-3 mb-2 sm:py-2.5 rounded-md flex `}
              style={{ borderColor: borderColor2 }}
            >
              <AiOutlineUser className="dark:text-gray-50" />

              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                id="Password"
                className="bg-white dark:bg-neutral-900 w-full dark:text-gray-50 text-gray-500 px-2 text-xs font-semibold"
                placeholder="Password e.g.12@12Wjsi0"
                style={{
                  border: "none",
                  backgroundColor: "none",
                  outline: "none",
                }}
              />
            </div>
          </div>
          {error && (
            <span className="text-xs text-red-300">
              Incorrect Credentials, please check again{" "}
            </span>
          )}
          <div className="mt-5">
            <button
              type="submit"
              className="text-md border-none px-3  py-2 text-white font-semibold w-full rounded-lg"
              style={{ background: color }}
            >
              {loading ? "Please wait..." : "LOGIN"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
