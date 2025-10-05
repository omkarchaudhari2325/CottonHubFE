import React, { useState, useEffect, useContext } from "react";
import background from "../../assets/login_signup_image.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
axios.defaults.baseURL = `https://cotton-hub.vercel.app/`;
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "../Loaders/Loader";
import MainLoader from "../Loaders/MainLoader";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../../context/AuthContext";
const backgroundImageUrl =
  "url(https://blossomplant.com/assets/images/bg_disease_block_1-2_desk@2x.jpg)";

const SignUp = () => {
  // const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const { login, setLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTouch = () => {
    setTouched(true);
  };
  const loginUser = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const { password, confirmPassword, email, firstName, lastName, isChecked } =
      formData;

    if (!confirmPassword || !email || !firstName || !lastName || !password) {
      // alert("Going inside")
      toast.error("All fields are necessary");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password and confirm passwords do not match");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return false;
    }
    if (!/\d{2}/.test(password)) {
      toast.error("Password must contain at least two digits");
      return false;
    }
    if (!/[@#$%^&*!]/.test(password)) {
      toast.error(
        "Password must contain at least one special character like @, #, $, %, etc."
      );
      return false;
    }

    if (!isChecked) {
      toast.error(
        "You must agree to terms and conditions to register yourself"
      );
      return;
    }
    // toast.success("All field are correct ")
    // console.log(formData);
    try {
      setLoading(true);
      const response = await axios.post("/api/v1/registerUser", formData);
      console.log(response.data);
      setLoading(false);
      if (response.data.success === true) {
        console.log("done brother");
        toast.success("Successfully Registered");
        setFormData({
          ...formData,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          isChecked: false,
        });
        navigate("/signin");
      }
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      setTimeout(() => {
        setLoading(false);
      }, 200);
      // navigate("/register")
    }
  };

  // const isGoogleUserValid = async () => {
  //   if (user) {
  //     try{
  //       const response = await
  //       axios
  //         .get(
  //           `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${user.access_token}`,
  //               Accept: "application/json",
  //             },
  //           }
  //         )
  //         const data = await response.data;
  //         setProfile(data);
  //         if(!profile){
  //           toast.error("No profile data available")
  //           return
  //         }
  //         const response2 = await axios.post("/api/v1/registerGoogle",profile)
  //         const data2 = await response2.data;
  //         console.log(data2);

  //         // setLogin(true);
  //         // router("/predict")

  //     }
  //     catch(err){
  //       console.log(err);
  //     }
  //   }
  // };
  // const loginGoogleHandler = async () => {
  //   // console.log(profile)
  //   if(!profile){
  //     toast.error("No profile data available")
  //     return
  //   }

  //   try{
  //     const response = await axios.get("/api/v1/registerGoogle")
  //     const data = response.data;
  //     console.log(data);
  //   }catch(err){
  //     console.log(err);
  //   }

  // };
  const handleGoogle = async () => {
    if (user) {
      try {
        const response = await axios.post(
          "https://cotton-hub.vercel.app/api/v1/getToken",
          user
        );
        const data = await response.data;
        console.log(data);
        localStorage.setItem("userDataToken2", data.result);
        // setLogin(true);

        // console.log(login)
      } catch (err) {
        console.log(err);
        // setLogin(false)
      }
    }
  };
  const checkTokenValidity = async () => {
    const token = localStorage.getItem("userDataToken");
    if (!token) {
      return;
    }
    try {
      setLoading(true); // Start loading
      const response = await axios.get("/api/v1/validUser", {
        headers: {
          Authorization: token,
        },
      });
      const data = response.data;
      if (data.success) {
        toast.success("You are already logged in.");
        setLogin(true);
        navigate("/predict");
      }
    } catch (error) {
      console.error("Error checking token validity:", error);
      setLogin(false);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const googleLoginVerfier = async () => {
    const token = localStorage.getItem("userDataToken2");
    console.log("got the token", token);
    try {
      const response = await axios.get("/api/v1/googleLoginVerifier", {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
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
  //     const data = response.data;
  //     if (data.success) {
  //       toast.success("You are already logged in.");
  //       setLogin(true)
  //       navigate("/predict");
  //     }
  //   } catch (error) {
  //     console.error("Error checking token validity:", error);
  //     setLogin(false)
  //   } finally {
  //     setLoading(false); // Stop loading
  //   }
  // };

  useEffect(() => {
    handleGoogle();
    googleLoginVerfier();
    // isGoogleUserValid();
    // checkTokenValidity();
  }, [user]);

  return (
    <div>
      {loading ? (
        <MainLoader />
      ) : (
        <div className="min-h-screen py-32 overflow-y-scroll bg-gray-100 overflow-hidden">
          <div className="container mx-auto p-5 min-h-screen">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-11/12 lg:h-full bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
              <div
                className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center opacity-90"
                style={{
                  background: backgroundImageUrl,
                  backgroundSize: "contain",
                }}
              >
                <h1 className="font-mulish font-semibold text-xl text-green-900">
                  Register and explore the whole new world with us
                </h1>

                <img src={background} alt="" />
              </div>
              <div className="w-full lg:w-1/2 py-7 px-12">
                <h2 className="text-2xl font-bold font-mulish mb-3">
                  Register
                </h2>
                <p className="mb-3 font-mulish">
                  Create your account. It's free and only takes a minute.
                </p>
                <form action="" onSubmit={submitHandler}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
                    <input
                      type="text"
                      placeholder="Firstname"
                      className="border border-gray-400 py-2 px-2 rounded-md"
                      name="firstName"
                      value={formData.firstName}
                      onChange={changeHandler}
                      onFocus={handleTouch}
                    />

                    <input
                      type="text"
                      placeholder="Lastname"
                      className="border border-gray-400 py-2 px-2 rounded-md relative"
                      name="lastName"
                      value={formData.lastName}
                      onChange={changeHandler}
                    />
                    {/* <span className="text-red-200 absolute left-[5.3rem] top-1">*</span> */}
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Email"
                      className="border border-gray-400 py-2 px-2 w-full rounded-md"
                      name="email"
                      value={formData.email}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="mt-5 relative">
                    <input
                      type={showPassword ? "text" : "password"} // Toggle between text and password type
                      placeholder="Password"
                      className="border border-gray-400 py-2 pl-2 pr-4 rounded-md w-full"
                      name="password"
                      value={formData.password}
                      onChange={changeHandler}
                    />
                    <span
                      className="absolute right-3  cursor-pointer top-2"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                      ) : (
                        <AiOutlineEye fontSize={24} />
                      )}
                    </span>
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    ></button>
                  </div>

                  <div className="mt-5 relative">
                    <input
                      type={showPassword2 ? "text" : "password"} // Toggle between text and password type
                      placeholder="Confirm Password"
                      className="border border-gray-400 py-2 pl-2 pr-4 rounded-md w-full"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={changeHandler}
                    />
                    <span
                      className="absolute right-3  cursor-pointer top-2"
                      onClick={() => setShowPassword2((prev) => !prev)}
                    >
                      {showPassword2 ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                      ) : (
                        <AiOutlineEye fontSize={24} />
                      )}
                    </span>
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    ></button>
                  </div>
                  <div className="mt-5 flex flex-row items-center">
                    <input
                      type="checkbox"
                      className="border border-gray-400 transform scale-150 accent-purple-500"
                      name="isChecked"
                      checked={formData.isChecked}
                      onChange={changeHandler}
                    />
                    <span className="p-2 font-mulish">
                      I accept the{" "}
                      <a href="#" className="text-purple-500 font-semibold">
                        Terms of Use
                      </a>{" "}
                      &amp;{" "}
                      <a href="#" className="text-purple-500 font-semibold">
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                  <div className="mt-5">
                    <button className="w-full font-mulish bg-purple-600 py-3 text-center hover:bg-purple-500 text-white rounded-md">
                      Register Now
                    </button>
                    <button
                      className="px-4 py-3 mt-3 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-full items-center justify-center"
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
                    {/* <button onClick={isGoogleUserValid}>Login with google handler 2</button> */}
                    <div className="font-mulish text-center mt-3 flex gap-2 justify-center">
                      <h1>Already have an account?</h1>
                      <NavLink
                        to="/signin"
                        className="text-light-blue-900 underline"
                      >
                        Sign In
                      </NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
