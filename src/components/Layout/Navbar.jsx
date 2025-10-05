import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
// import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import userPng from "../../assets/user.png";
import axios from "axios";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext";
// import { data } from "autoprefixer";

const Navbar = () => {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(AuthContext);
  // console.log(login)
  // const { login, setLogin } = useContext(AuthContext);
  // const [login,setLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [loginData, setLoginData] = useState([]);

  const { data } = useContext(AuthContext);
  // console.log("Here here this is the data " + data);

  // const [loggedIn, setIsLoggedIn] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isDashboardValid = async () => {
    try {
      // const token = localStorage.getItem("userDataToken");
      const response = await axios.get(
        "https://cotton-hub.vercel.app/api/v1/get-token"
      );
      const data = response.data;
      setLoginData(data);
      localStorage.setItem("data", JSON.stringify(data));
      // setIsLoggedIn(true);
    } catch (err) {
      // console.error("Error fetching user data:", err);
      setLoginData(null);
      // setIsLoggedIn(false);
    }
  };
  // console.log(loginData.user);
  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  const notify = () => {
    toast("Here is a toast example");
  };
  console.log(localStorage.getItem("data"));

  const logoutHandler = () => {
    // setIsLoggedIn(false);
    localStorage.removeItem("userDataToken");
    setLogin(false);
    navigate("/");
    toast.success("Logged out successfully");
  };
  useEffect(() => {
    isDashboardValid();
  }, []);
  console.log("I have got data from context like ", data);

  return (
    // <div>
    //   {
    //     loggedIn ? <h1>Verified user</h1> : <h2>Not verfied</h2>
    //   }
    // </div>

    <div>
      <div className="fixed top-0 z-50 bg-gray-100 w-full shadow-md p-5">
        <div className="flex flex-row justify-between  max-w-[1000px] mx-auto items-center text-base font-sans">
          {/* Image and text */}
          <div className="image flex flex-row items-center gap-4 text-black">
            <img
              src="https://blossomplant.com/assets/images/logo_desctop.png"
              alt="Logo"
              className="w-14 h-14"
            />
            <Link to="/">
              <p className="text-green-700 font-bold text-xl font-mulish">
                Cotton Disease Detection
              </p>
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fill="none" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <div
            className={`menu-items md:flex flex-row items-center gap-8  ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {/* <Link to="/blogs">
              <h2
                className="text-black cursor-pointer text-[1.1rem] font-bold font-mulish relative overflow-hidden"
                style={{
                  transition: "color 0.3s",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#4299e1";
                  e.target.querySelector(".line").style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "inherit";
                  e.target.querySelector(".line").style.width = "0";
                }}
              >
                Blogs
                <span className="absolute left-0 w-full h-0.5 bg-blue-500 bottom-0 transition-all duration-300 transform scale-x-0 line"></span>
              </h2>
            </Link> */}
            {!login && (
              <Link to="/signin">
                <button className="relative bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 w-36 overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent translate-x-full transition-transform duration-300 group-hover:translate-x-0 "></span>
                  <p className="font-mulish font-bold">Sign in</p>
                </button>
              </Link>
            )}

            <Link to="/all-diseases">
              <h2
                className="text-black heading text-xl font-semibold cursor-pointer inline-block relative duration-200
            font-mullish py-2 transition-all hover:text-light-blue-900 group lg:block"
              >
                <a href="" className="text-yellow-900">
                  Diseases
                </a>
                <div class="absolute w-full bg-light-blue-200 bottom-0 hidden group-hover:block transition-all duration-200 "></div>
              </h2>
            </Link>

            <Link to="/contact">
              <h2
                className="text-black heading transition duration-500  cursor-pointer font-mulish  text-[1.1rem] inline-block relative
            font-mullish py-2 hover:text-lightBlue   group lg:block hover:text-light-blue-900"
              >
                <a href="" className="font-bold">
                  Contact
                </a>
                <div class="absolute w-full bg-light-blue-200 bottom-0 hidden group-hover:block transition-all duration-200 "></div>
              </h2>
            </Link>
            <Link to="/about">
              <h2
                className="text-black heading transition duration-500 cursor-pointer font-mulish  text-[xl] inline-block relative
            font-mullish py-2 hover:text-lightBlue   group lg:block hover:text-light-blue-900"
              >
                <h1 className="font-bold">About</h1>
                <div class="absolute w-full bg-light-blue-200 bottom-0 hidden group-hover:block transition-all duration-200 "></div>
              </h2>
            </Link>

            {/* Profile icon */}
            {login && (
              <div className="relative flex " ref={dropdownRef}>
                <div className="flex">
                  <span className="font-bold mt-3 text-sm text-blue-900 ">
                    {data && data.firstName && data.firstName.substring(0, 15)}
                    {/* {data && data.firstName && data.firstName.substring(0, 15)} */}
                  </span>
                  <p className="mr-3 mt-3"></p>
                  <button
                    onClick={toggleMenu}
                    id="multiLevelDropdownButton"
                    className="text-white   font-medium text-sm  py-2.5 text-center inline-flex items-center  w-24  relative"
                  >
                    <img
                      src={loginData && data && data?.profileImageUrl}
                      className="object-cover rounded-full w-12 h-12 absolute"
                      alt="porfile-image"
                      loading="lazy"
                    />
                  </button>
                </div>

                <div
                  className={`dropdown-menu ${
                    isOpen ? "block" : "hidden"
                  } absolute right-0 mt-12 w-44 bg-gray-100  shadow-lg divide-y divide-gray-100 rounded-lg `}
                >
                  <ul
                    className="py-2 text-sm px-6  text-white"
                    aria-labelledby="multiLevelDropdownButton"
                  >
                    <li className="text-black p-2 mt-1 font-bold">
                      {login && data && `Hey ${loginData && data?.firstName}!`}
                    </li>
                    <hr className="font-bold text-gray-900 border-gray-700 mb-3" />
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:w-full hover:rounded-lg text-black dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link to="/dashboard/change-pass">
                        <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:rounded-lg text-black dark:hover:text-white">
                          Change Pass
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={logoutHandler}
                        className="block px-4 py-2 cursor-pointer text-black hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
