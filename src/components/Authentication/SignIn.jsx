import React, { useState, useEffect, useContext } from "react";
import background from "../../assets/signinpage.png";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import MainLoader from "../Loaders/MainLoader"; // Import your loader component
import Main from "../Layout/Main";
import Shimmer from "../Shimmer/Shimmer";
import LoginShimmer from "../Shimmer/LoginShimmer";
import { AuthContext } from "../../context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
// import { N } from "react-router-dom";
// import {jwt_decode} from "jwt-decode";
axios.defaults.baseURL = `https://cotton-hub.vercel.app/`;

const SignIn = () => {
  // var token = "";
  const router = useNavigate();
  const { data, setData } = useContext(AuthContext);
  // console.log(jwtDecode)
  // const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, setLogin } = useContext(AuthContext);
  const [loginData, setLoginData] = useState([]);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  var tokenResponseDecoded;

  // Within your onSuccess callback:
  const loginUser = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  // const checkTokenValidity = async () => {
  //   const token = localStorage.getItem("userDataToken");
  //   if (!token) {
  //     return;
  //   }
  //   try {
  //     setLoading(true); // Start loading
  //     const response = await axios.get("/api/v1/validUser", {
  //       headers: {
  //         Authorization: token,
  //       },
  //     });
  //     const data = await response.data;
  //     if (data.success) {
  //       toast.success("You are already logged in.");
  //       navigate("/predict");
  //     }
  //   } catch (error) {
  //     console.error("Error checking token validity:", error);
  //   } finally {
  //     setLoading(false); // Stop loading
  //   }
  // };
  // console.log(profile)
  const isDashboardValid = async () => {
    try {
      // const token = localStorage.getItem("userDataToken");
      const response = await axios.get(
        "https://cotton-hub.vercel.app/api/v1/get-token"
      );
      const data = response.data;
      setLoginData(data);
      setData(data);
      setLogin(true);
      if (data.success === true) {
        navigate("/predict");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setLoginData(null);
      setData(null);
      setIsLoggedIn(false);
      setLogin(false);
    }
  };
  // console.log(loginData)
  useEffect(() => {
    // isGoogleUserValid();
    isDashboardValid();
  }, []);

  const googleLoginHandler = async () => {
    // e.preventDefault();
    console.log(profile);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      toast.error("Please enter all the credentials");
      return;
    }

    try {
      setLoading(true); // Start loading
      const response = await axios.post("/api/v1/login", formData);
      if (response.data.success === true) {
        toast.success("Logged in successfully");
        localStorage.setItem("userDataToken", response.data.result.token);
        setLogin(true);
        navigate("/predict");
      }
    } catch (error) {
      setLoading(false);
      setLogin(false);
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  return loading ? (
    <LoginShimmer />
  ) : (
    <div className="min-h-screen py-8 md:py-16 lg:py-36 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-screen-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 bg-no-repeat bg-cover bg-center opacity-90"> */}
          <div
            className="flex w-[60%] items-center justify-center bg-cover bg-center h-[80vh]"
            style={{ backgroundImage: `url(${background})` }}
          >
            {/* Your content goes here */}
          </div>

          {/* </div> */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20">
            <h2 className="text-2xl font-bold font-mulish mb-4">
              You have been missed , sign in
            </h2>
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-2 px-3 w-full rounded-md"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border border-gray-400 py-2 px-3 w-full rounded-md"
                  value={formData.password}
                  name="password"
                  onChange={changeHandler}
                />
                <span
                  className="absolute top-2 right-3 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} />
                  )}
                </span>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full font-mulish bg-purple-600 py-3 text-center hover:bg-purple-500 text-white rounded-md"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="flex flex-col items-center mb-4">
              <button
                className="px-4 py-3 mt-3 border flex gap-2 border-slate-400 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-full items-center justify-center"
                onClick={loginUser}
              >
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
              {/* <button onClick={googleLoginHandler} className="border border-gray-900 mt-10">Save data google dude</button> */}
              <div className="font-mulish text-center md:text-right flex items-center gap-2 p-5">
                <h1 className="">Don't have an account?</h1>
                <NavLink
                  to="/register"
                  className="text-light-blue-900 underline"
                >
                  Register Here
                </NavLink>
              </div>
              <div className="font-mulish text-center md:text-right flex items-center gap-2 p-2">
                <h1 className="">Forgot Password ? </h1>
                <NavLink
                  to="/forgot-password"
                  className="text-light-blue-900 underline"
                >
                  Click Here
                </NavLink>
                {/* <h1>{user[0]}</h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
