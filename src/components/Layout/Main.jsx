import React, { useEffect, useState } from "react";
import cottonImg from "../../assets/cotton_image.png";
import toast from "react-hot-toast";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
// import "../Interceptors/Interceptor"
const Main = () => {
  const { login, setLogin } = useContext(AuthContext);
  // setLogin(false)
  // const [data,setData] = useState(null);

  const { data, setData } = useContext(AuthContext);

  const handleClick = () => {
    if (localStorage.getItem("userDataToken")) {
      return;
    }
    toast.error("You need to login first to access the the content");
  };
  const isDashboardValid = async () => {
    try {
      // const token = localStorage.getItem("userDataToken");
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-token"
      );
      // const data = await response.data;
      const resData = await response.data.user;
      setData(resData);
      // console.log("I am getting data like",resData)
      // console.log(resData)

      // console.log(data)
      setLogin(true);

      // setLoginData(data);
      // setIsLoggedIn(true);
    } catch (err) {
      setData(null);
      console.error("Error fetching user data:", err);
      // setLoginData(null);
      setLogin(false);
      // setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    isDashboardValid();
  }, []);

  // console.log("This is the data i setted in context ",data)

  return (
    <div>
      <div className="max-w-[1000px] mx-auto mt-28 z-20 bg-fixed ">
        <div className="content flex gap-28 w-full flex-row justify-evenly items-center">
          <div className="image ">
            <img
              src={cottonImg}
              alt="Cotton"
              className=" w-[80vw] h-[80vh] object-contain z-10 mb-5"
              loading="lazy"
            />
          </div>

          <div className="details  flex-col items-baseline justify-center flex">
            <div className="title text-3xl font-semibold text-gray-800 mb-4 font-mulish">
              Cotton Disease
            </div>
            <div className="description text-lg text-gray-600 mb-4 w-[30vw]">
              <p className="font-mulish text-black text-justify">
                Cotton plants are vulnerable to various diseases and pests,
                including bacterial blight, aphids, and armyworms. Bacterial
                blight causes water-soaked lesions on leaves and stems, reducing
                yield and fiber quality. Aphids spread viruses like cotton leaf
                curl virus, leading to stunted growth and yield loss. Armyworms
                devour foliage, flowers, and bolls, causing severe defoliation
                and reduced productivity. To manage these threats, farmers
                employ integrated pest management techniques, including cultural
                practices and targeted pesticide use, to protect their cotton
                crops and ensure healthy yields.
              </p>
            </div>
            <NavLink to="/signin">
              <button
                onClick={handleClick}
                className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 mt-3 w-52 font-mulish "
              >
                Diagnose Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
