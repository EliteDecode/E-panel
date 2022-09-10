import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FaFlagCheckered } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

export const UsersInput = [
  {
    id: "FirstName",
    placeholder: "Add FirstName e.g. Jon",
    type: "text",
    name: "firstname",
    icon: <AiOutlineUser className="dark:text-gray-50" />,
  },
  {
    id: "LirstName",

    placeholder: "Add LirstName e.g. Doe",
    type: "text",
    name: "lastname",
    icon: <AiOutlineUser className="dark:text-gray-50" />,
  },
  {
    id: "Email",
    placeholder: "Add Email e.g. Jon Doe@Email.com",
    type: "email",
    name: "email",
    icon: <AiOutlineMail className="dark:text-gray-50" />,
  },
  {
    id: "State",
    placeholder: "Add State e.g. Los Angeles",
    type: "text",
    name: "state",
    icon: <BiLocationPlus className="dark:text-gray-50" />,
  },
  {
    id: "Country",
    placeholder: "Add Country e.g. U.S.A",
    type: "text",
    name: "country",
    icon: <FaFlagCheckered className="dark:text-gray-50" />,
  },
];

export const ProductsInput = [
  {
    id: "Name",
    placeholder: "Add ProductName e.g. Iphone X",
    type: "text",
    name: "name",
    icon: <AiOutlineUser className="dark:text-gray-50" />,
  },
  {
    id: "Price",

    placeholder: "Add Price e.g. $3,000",
    type: "number",
    name: "price",
    icon: <AiOutlineUser className="dark:text-gray-50" />,
  },
  {
    id: "Quantity",
    placeholder: "Add Quantity e.g. 90",
    type: "number",
    name: "quantity",
    icon: <AiOutlineMail className="dark:text-gray-50" />,
  },

  {
    id: "Brand",
    placeholder: "Add Brand e.g. Apple",
    type: "text",
    name: "brand",
    icon: <FaFlagCheckered className="dark:text-gray-50" />,
  },
];
