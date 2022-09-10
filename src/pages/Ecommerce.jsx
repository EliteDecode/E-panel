import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useGlobalContext } from "../context";
import MiniCards from "../components/MiniCards";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiDollar, BiUser } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import AreaComponent from "../components/AreaComponent";
import LineComponent from "../components/LineComponent";
// import { newusers, pieChartData, recentOrders } from "../data";
import BarComponent from "../components/BarComponent";
import Avatar from "@mui/material/Avatar";
import millify from "millify";

// import image from "../assets/user5.jpg";
import { EarningsLineData, ProductsLineData } from "../data/lineChartData";

const Ecommerce = () => {
  const { color } = useGlobalContext();
  const [users, setUsers] = useState("");
  const [products, setProducts] = useState("");
  const [orders, setOrders] = useState("");
  const [loading, setLoading] = useState(false);

  const [lastMonthUsersData, setLastMonthUsersData] = useState(null);
  const [prevMonthUsersData, setPrevMonthUsersData] = useState(null);
  const [lastMonthProductsData, setLastMonthProductsData] = useState(null);
  const [prevMonthProductsData, setPrevMonthProductsData] = useState(null);
  const [lastMonthOrdersData, setLastMonthOrdersData] = useState(null);
  const [prevMonthOrdersData, setPrevMonthOrdersData] = useState(null);
  const [earnings, setEarnings] = useState("");

  const [usersDiff, setUsersDiff] = useState(0);
  const [productsDiff, setProductsDiff] = useState(0);
  const [ordersDiff, setOrdersDiff] = useState(0);
  const [earningsDiff, setEarningsDiff] = useState(100);
  const [limitedUsers, setLimitedUsers] = useState([]);
  const [limitedOrders, setLimitedOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      //users monthly query
      const lastMonthQueryUsers = query(
        collection(db, "users"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQueryUsers = query(
        collection(db, "users"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthDataUsers = onSnapshot(
        lastMonthQueryUsers,
        (querySnapshot) => {
          const userdata = [];
          querySnapshot.forEach((doc) => {
            userdata.push({ id: doc.id, ...doc.data() });

            setLastMonthUsersData(userdata.length);
          });
        }
      );

      const PrevMonthDataUsers = onSnapshot(
        prevMonthQueryUsers,
        (querySnapshot) => {
          const userdata = [];
          querySnapshot.forEach((doc) => {
            userdata.push({ id: doc.id, ...doc.data() });

            setPrevMonthUsersData(userdata.length);
          });
        }
      );

      //product monthly analysis

      const lastMonthQueryProducts = query(
        collection(db, "products"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
      const prevMonthQueryProducts = query(
        collection(db, "products"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );

      const lastMonthDataProducts = onSnapshot(
        lastMonthQueryProducts,
        (querySnapshot) => {
          const productData = [];
          querySnapshot.forEach((doc) => {
            productData.push({ id: doc.id, ...doc.data() });

            setLastMonthProductsData(productData.length);
          });
        }
      );

      const PrevMonthDataProducts = onSnapshot(
        prevMonthQueryProducts,
        (querySnapshot) => {
          const productData = [];
          querySnapshot.forEach((doc) => {
            productData.push({ id: doc.id, ...doc.data() });

            setPrevMonthProductsData(productData.length);
          });
        }
      );

      //orders monthly analysis

      const lastMonthQueryOrders = query(
        collection(db, "orders"),
        where("Timestamp", "<=", today),
        where("Timestamp", ">", lastMonth)
      );
      const prevMonthQueryOrders = query(
        collection(db, "orders"),
        where("Timestamp", "<=", lastMonth),
        where("Timestamp", ">", prevMonth)
      );

      const lastMonthDataOrders = onSnapshot(
        lastMonthQueryOrders,
        (querySnapshot) => {
          const orderData = [];
          querySnapshot.forEach((doc) => {
            orderData.push({ id: doc.id, ...doc.data() });

            setLastMonthOrdersData(orderData.length);
          });
        }
      );

      const PrevMonthDataOrders = onSnapshot(
        prevMonthQueryOrders,
        (querySnapshot) => {
          const orderData = [];
          querySnapshot.forEach((doc) => {
            orderData.push({ id: doc.id, ...doc.data() });

            setPrevMonthOrdersData(orderData.length);
          });
        }
      );
    };

    fetchData();
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setUsers(list.length);
      },
      (error) => {
        console.log(error);
      }
    );

    const collectionRef = collection(db, "users");
    const q = query(collectionRef, orderBy("timeStamp", "desc"), limit(5));

    onSnapshot(
      q,
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });

          setLimitedUsers(list);
        });
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);
  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "products"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          setLoading(false);
          list.push({ id: doc.id, ...doc.data() });
        });

        setProducts(list.length);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  //getting total orders
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "orders"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setOrders(list.length);
      },
      (error) => {
        console.log(error);
      }
    );

    const collectionRef = collection(db, "orders");
    const q = query(collectionRef, orderBy("Timestamp", "desc"), limit(6));

    onSnapshot(
      q,
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });

          setLimitedOrders(list);
        });
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    const q = query(collection(db, "orders"), where("Status", "==", "paid"));

    onSnapshot(
      q,
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push(doc.data().Total);

          let sum = 0;
          for (let index = 0; index < list.length; index++) {
            sum += list[index];
          }

          setEarnings(sum);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    setUsersDiff(
      (
        ((lastMonthUsersData - prevMonthUsersData) / prevMonthUsersData) *
        100
      ).toFixed(1)
    );
    setProductsDiff(
      (
        ((lastMonthProductsData - prevMonthProductsData) /
          prevMonthProductsData) *
        100
      ).toFixed(1)
    );
    setOrdersDiff(
      (
        ((lastMonthOrdersData - prevMonthOrdersData) / prevMonthOrdersData) *
        100
      ).toFixed(1)
    );
  }, [
    lastMonthUsersData,
    prevMonthUsersData,
    lastMonthProductsData,
    prevMonthProductsData,
    lastMonthOrdersData,
    prevMonthOrdersData,
  ]);
  return (
    <>
      <Navbar />
      <div className="my-10">
        <div className="grid grid-cols-2 sm:grid-cols-4  gap-2 sm:gap-8 mx-1 sm:mx-0  p-3">
          <MiniCards
            title="Users"
            description="See all users"
            amount={users}
            icon={<BiUser style={{ color: "white" }} />}
            color={color}
            diff={usersDiff}
            loading={loading}
          />
          <MiniCards
            title="Products"
            description="See all products"
            amount={products}
            icon={<FiShoppingBag style={{ color: "white" }} />}
            color="#FB9678"
            diff={productsDiff}
            loading={loading}
          />
          <MiniCards
            title="Orders"
            description="See all orders"
            amount={orders}
            icon={<AiOutlineShoppingCart style={{ color: "white" }} />}
            color="#03C9D7"
            diff={ordersDiff}
            loading={loading}
          />
          <MiniCards
            title="Earnings"
            diff={earningsDiff}
            description="See all users"
            amount={`$ ${millify(earnings)}`}
            icon={<BiDollar style={{ color: "white" }} />}
            color="#FF5C8E"
            loading={loading}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1  gap-2 sm:gap-8 mx-1 sm:mx-0 mt-5 px-3 sm:px-3 py-5 ">
          <div className=" border dark:border-neutral-800 dark:shadow-lg shadow-md dark:bg-neutral-900 rounded-lg shadow-neutral-600 ">
            <h4 className="font-semibold capitalize text-md mx-5 mt-2 text-slate-900 text-gray-400 dark:text-white">
              Total product sales
            </h4>
            <div className="mx-3" style={{ height: "400px" }}>
              <LineComponent dataType={ProductsLineData} dataKey="products" />
            </div>
          </div>
          <div className=" mt-5 border dark:border-neutral-800 shadow-md dark:shadow-lg dark:bg-neutral-900 rounded-lg shadow-neutral-600">
            <h4 className="font-semibold capitalize text-md mx-5 mt-2 text-slate-900 text-gray-400 dark:text-white">
              Total Stock Data
            </h4>
            <div style={{ height: "320px" }}>
              <BarComponent />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center w-full my-5 ">
          <div className="w-full sm:w-1/3 mb-3 py-3 ">
            <div className=" mx-3 cursor-pointer shadow-md dark:shadow-lg  shadow-neutral-600  border dark:border-neutral-800 bg-offwhite dark:bg-neutral-900 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-500 text-lg dark:text-white  px-3  dark:border-neutral-800 border-b py-3">
                New Users
              </h3>
              {limitedUsers?.map((user, index) => {
                const { FirstName, LirstName, State, img, Country, Email } =
                  user;
                return (
                  <Link to={`/user/${Email} `}>
                    <div
                      className="flex  border-b  dark:border-neutral-800 justify-between px-3 py-1.5"
                      key={index}
                    >
                      <div className="flex items-center space-x-2">
                        <Avatar alt="Remy Sharp" src={img} className="mt-1" />
                        <div className="flex flex-col  ">
                          <h3 className="font-semibold text-md dark:text-white">
                            {FirstName}, {LirstName}
                          </h3>
                          <span className="font-normal text-gray-500 dark:text-gray-200 text-xs -mt-1">
                            {State},{Country}
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex border items-center space-x-2 px-2  rounded-lg"
                        style={{ background: color }}
                      >
                        <BsEye
                          className="text-white font-bold"
                          style={{ fontSize: "12px" }}
                        />
                        <span
                          className="text-white font-bold uppercase"
                          style={{ fontSize: "9px" }}
                        >
                          Display
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="sm:w-2/3 w-full   mb-3 py-3">
            <div className=" mx-3 sm:mx-3 shadow-md dark:shadow-lg shadow-neutral-600  border dark:border-neutral-800 bg-offwhite dark:bg-neutral-900 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-500 text-lg dark:text-white  px-3  dark:border-neutral-600 border-b py-3">
                Recent Orders
              </h3>
              <div
                className="flex items-center flex-col"
                style={{ overflowX: "scroll" }}
              >
                <table id="customers">
                  <tr>
                    <th style={{ background: color }}>Customer</th>
                    <th style={{ background: color }}>Product</th>
                    <th style={{ background: color }}>Price</th>

                    <th style={{ background: color }}>Status</th>
                  </tr>
                  {limitedOrders.map((order, index) => {
                    const { Name, Price, Product, Status } = order;
                    return (
                      <tr
                        key={index}
                        className="border dark:border-neutral-800"
                      >
                        <td className="">
                          <span className="font-semibold text-md dark:text-white">
                            {Name}
                          </span>
                        </td>
                        <td>
                          <span className="font-normal text-md dark:text-white">
                            {Product}
                          </span>
                        </td>

                        <td>
                          {" "}
                          <span className="font-normal text-md dark:text-white">
                            {millify(Price)}
                          </span>
                        </td>
                        {Status === "pending" && (
                          <td className=" font-normal">
                            <span className="bg-blue-300 text-slate-900 opacity-90 lowercase px-1.5 py-0.5 text-xs rounded-lg">
                              {Status}
                            </span>
                          </td>
                        )}
                        {Status === "cancelled" && (
                          <td className="text-red-300 font-semibold">
                            <span className="bg-red-300 text-slate-900 opacity-90 lowercase px-1.5 py-0.5 text-xs rounded-lg">
                              {Status}
                            </span>
                          </td>
                        )}
                        {Status === "paid" && (
                          <td className="text-green-300 font-semibold">
                            <span className="bg-green-300 text-slate-900 opacity-90 lowercase px-1.5 py-0.5 text-xs rounded-lg">
                              {Status}
                            </span>
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="border dark:border-neutral-800 py-3 dark:bg-neutral-900 shadow-md dark:shadow-lg rounded-lg shadow-neutral-600">
            <h4 className="font-semibold capitalize text-md my-5 mx-5 mt-2 text-slate-900 text-gray-400 dark:text-white">
              Total Earnings last year
            </h4>
            <div className="mx-3" style={{ height: "400px" }}>
              <LineComponent dataType={EarningsLineData} dataKey="earnings" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
