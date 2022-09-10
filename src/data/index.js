import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  // AiOutlineBarChart,
  AiOutlineStock,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { FiShoppingBag, FiPieChart } from "react-icons/fi";

import { IoMdContacts } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

import src1 from "../assets/user15.jpg";
import src2 from "../assets/user9.png";
import src3 from "../assets/user11.png";
import src4 from "../assets/user17.jpg";
import src5 from "../assets/user18.jpg";

import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.JPG";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "users",
        icon: <IoMdContacts />,
      },
      {
        name: "orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "products",
        icon: <FiShoppingBag />,
      },
    ],
  },
  {
    title: "Data",
    links: [
      {
        name: "add_user",
        icon: <AiOutlineUserAdd />,
      },
      {
        name: "add_product",
        icon: <BsFillCartPlusFill />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "pie",
        icon: <FiPieChart />,
      },
    ],
  },

  {
    title: "User",
    links: [
      {
        name: "profile",
        icon: <AiOutlineUser />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
  {
    color: "#ea580c",
    name: "dark-orange-theme",
  },
  {
    color: "#4d7c0f",
    name: "lime-theme",
  },
  {
    color: "#06b6d4",
    name: "cyan-theme",
  },
  {
    color: "#0369a1",
    name: "sky-theme",
  },
  {
    color: "#701a75",
    name: "fuchsia-theme",
  },
];

export const pieChartData = [
  { x: "January", y: 12, text: "Jan 12%" },
  { x: "Febuary", y: 17, text: "Feb 17%" },
  { x: "March", y: 21.5, text: "Mar 21.5%" },
  { x: "April", y: 11.5, text: "Apr 11.5%" },
  { x: "May", y: 14, text: "May 14%" },
  { x: "June", y: 7, text: "Jun 7%" },
  { x: "July", y: 13, text: "Jul 13%" },
  { x: "August", y: 4, text: "Aug 4%" },
];

export const pieChartUsersData = [
  { x: "January", y: 3, text: "Jan 3%" },
  { x: "Febuary", y: 12, text: "Feb 12%" },
  { x: "March", y: 19, text: "Mar 19%" },
  { x: "April", y: 21, text: "Apr 21%" },
  { x: "May", y: 13, text: "May 13%" },
  { x: "June", y: 18, text: "Jun 18%" },
  { x: "July", y: 12, text: "Jul 12%" },
  { x: "August", y: 2, text: "Aug 2%" },
];
export const pieChartOrdersData = [
  { x: "January", y: 13, text: "Jan 13%" },
  { x: "Febuary", y: 17, text: "Feb 17%" },
  { x: "March", y: 11, text: "Mar 11%" },
  { x: "April", y: 25, text: "Apr 25%" },
  { x: "May", y: 9, text: "May 9%" },
  { x: "June", y: 16, text: "Jun 16%" },
  { x: "July", y: 5, text: "Jul 5%" },
  { x: "August", y: 4, text: "Aug 4%" },
];
export const pieChartEarningsData = [
  { x: "January", y: 8, text: "Jan 8%" },
  { x: "Febuary", y: 11, text: "Feb 11%" },
  { x: "March", y: 16, text: "Mar 16%" },
  { x: "April", y: 12, text: "Apr 12%" },
  { x: "May", y: 15, text: "May 15%" },
  { x: "June", y: 9, text: "Jun 9%" },
  { x: "July", y: 23, text: "Jul 39%" },
  { x: "August", y: 6, text: "Aug 6%" },
];

export const salesData = [
  {
    month: "Jan",
    users: 4000,
    orders: 2400,
    products: 2400,
  },
  {
    month: "Feb",
    users: 3000,
    orders: 1398,
    products: 2210,
  },
  {
    month: "Mar",
    users: 2000,
    orders: 9800,
    products: 2290,
  },
  {
    month: "Apr",
    users: 2780,
    orders: 3908,
    products: 2000,
  },
  {
    month: "May",
    users: 1890,
    orders: 4800,
    products: 2181,
  },
  {
    month: "Jun",
    users: 2390,
    orders: 3800,
    products: 2500,
  },
  {
    month: "Jul",
    users: 3490,
    orders: 4300,
    products: 2100,
  },
  {
    month: "Aug",
    users: 3490,
    orders: 4300,
    products: 2100,
  },
  {
    month: "Sep",
    users: 3490,
    orders: 4300,
    products: 2100,
  },
  {
    month: "Oct",
    users: 3490,
    orders: 4300,
    products: 2100,
  },
  {
    month: "Nov",
    users: 3490,
    orders: 4300,
    products: 2100,
  },
  {
    month: "Dec",
    users: 3490,
    orders: 4300,
    products: 2100,
  },
];

export const newusers = [
  {
    name: "Ese Jonathan",
    state: "Lagos",
    country: "Nigeria",
    image: src1,
  },
  {
    name: "Jise palmer",
    state: "New York",
    country: "United Kingdom",
    image: src2,
  },
  {
    name: "Otega Teg",
    state: "Delta",
    country: "Nigeria",
    image: src3,
  },
  {
    name: "Sarah Benis",
    state: "Abuja",
    country: "Nigeria",
    image: src4,
  },
  {
    name: "Ese daniels",
    state: "Paris",
    country: "Italy",
    image: src5,
  },
];

export const recentOrders = [
  {
    customer: "Ericca Campbell",
    product: "Samsung s20",
    date: "12 Aug 2022",

    status: "Pending",
    image: user2,
  },
  {
    customer: "Ericca Campbell",
    product: "Samsung s20",
    date: "12 Aug 2022",

    status: "Delivered",
    image: user3,
  },
  {
    customer: "Ericca Campbell",
    product: "Samsung s20",
    date: "12 Aug 2022",

    status: "Pending",
    image: user4,
  },
  {
    customer: "Ericca Campbell",
    product: "Samsung s20",
    date: "12 Aug 2022",

    status: "Cancelled",
    image: user5,
  },
];
